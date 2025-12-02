const Order = require('../models/Order');

// Função auxiliar de transformação (De/Para) com PROTEÇÃO
const transformOrderData = (data) => {
    // Se data for nulo ou indefinido, retorna null para não quebrar a aplicação
    if (!data || !data.numeroPedido) {
        return null;
    }

    return {
        orderId: data.numeroPedido ? data.numeroPedido.replace('-01', '') : null,
        value: data.valorTotal,
        creationDate: data.dataCriacao,
        items: data.items ? data.items.map(item => ({
            productId: parseInt(item.idItem),
            quantity: item.quantidadeItem,
            price: item.valorItem
        })) : []
    };
};

module.exports = {
    // 1. Criar Pedido (POST)
    createOrder: async (req, res) => {
        try {
            const orderData = transformOrderData(req.body);
            
            // Validação simples se a transformação funcionou
            if (!orderData) {
                return res.status(400).json({ error: 'Corpo da requisição inválido ou faltando campos obrigatórios (numeroPedido).' });
            }

            const existingOrder = await Order.findOne({ orderId: orderData.orderId });
            if (existingOrder) {
                return res.status(409).json({ error: 'Pedido com este ID já existe.' });
            }

            const newOrder = new Order(orderData);
            await newOrder.save();
            
            res.status(201).json({ message: 'Pedido criado com sucesso!', order: newOrder });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar pedido: ' + error.message });
        }
    },

    // 2. Buscar Pedido por ID (GET)
    getOrderById: async (req, res) => {
        try {
            const order = await Order.findOne({ orderId: req.params.id });
            if (!order) {
                return res.status(404).json({ message: 'Pedido não encontrado.' });
            }
            res.status(200).json(order);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // 3. Listar Todos (GET)
    listOrders: async (req, res) => {
        try {
            const orders = await Order.find();
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // 4. Deletar Pedido (DELETE)
    // CORREÇÃO: Não usamos transformOrderData aqui, pois DELETE não tem body.
    deleteOrder: async (req, res) => {
        try {
            const orderId = req.params.id; // Pegamos direto da URL
            
            const result = await Order.findOneAndDelete({ orderId: orderId });
            
            if (!result) {
                return res.status(404).json({ message: 'Pedido não encontrado para exclusão.' });
            }
            res.status(200).json({ message: 'Pedido removido com sucesso.' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    
    // 5. Atualizar Pedido (PUT)
    updateOrder: async (req, res) => {
        try {
            let payload = req.body;
            let dataToUpdate = null;

            // CASO 1: Veio o formato Original (Português) -> Fazemos a transformação
            if (payload.numeroPedido) {
                dataToUpdate = transformOrderData(payload);
            } 
            // CASO 2: Veio o formato Banco (Inglês) -> Usamos direto, mas limpamos o _id
            else if (payload.orderId) {
                dataToUpdate = { ...payload };
                
                // IMPORTANTE: O MongoDB não permite alterar o campo imutável '_id'.
                // Se você mandou o _id no JSON, precisamos removê-lo antes de atualizar.
                delete dataToUpdate._id;
                
                // Limpeza de _id nos itens também, caso existam
                if (dataToUpdate.items) {
                    dataToUpdate.items = dataToUpdate.items.map(item => {
                        const itemClean = { ...item };
                        delete itemClean._id;
                        return itemClean;
                    });
                }
            } 
            else {
                 return res.status(400).json({ 
                     error: 'Formato desconhecido. Envie com "numeroPedido" (PT-BR) ou "orderId" (EN).' 
                 });
            }

            // Executa a atualização
            const updatedOrder = await Order.findOneAndUpdate(
                { orderId: req.params.id },
                dataToUpdate,
                { new: true } // Retorna o objeto já atualizado
            );

            if (!updatedOrder) {
                return res.status(404).json({ message: 'Pedido não encontrado para atualização.' });
            }
            res.status(200).json(updatedOrder);

        } catch (error) {
            res.status(500).json({ error: 'Erro no update: ' + error.message });
        }
    }
};
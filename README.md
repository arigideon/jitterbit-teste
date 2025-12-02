# Desafio Técnico Jitterbit - Order API

API REST desenvolvida em Node.js para gerenciamento de pedidos (CRUD), integrando com MongoDB Atlas e implementando lógica de transformação de dados (De/Para).

A aplicação foi projetada para receber dados em um formato legado (Português) e armazená-los em um formato padronizado (Inglês) no banco de dados.

## 🚀 Tecnologias Utilizadas
* **Node.js** & **Express**: Framework para construção da API.
* **MongoDB Atlas** & **Mongoose**: Banco de dados NoSQL e ODM.
* **Swagger UI**: Documentação interativa da API.
* **Postman**: Coleção de testes automatizados e manuais.

## ⚙️ Pré-requisitos
* Node.js instalado (v14 ou superior).
* Uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) com um cluster criado.
* Git instalado.

## 🔧 Instalação e Configuração

1. **Clone o repositório:**
```bash
git clone https://github.com/arigideon/jitterbit-teste.git
cd jitterbit-teste
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure as variáveis de ambiente: Crie um arquivo `.env` na raiz do projeto e adicione sua string de conexão:**
```bash
username_db = "user"
password_db = "pass"
url_db = "mongodb+srv://<usuario>:<senha>@<seu-cluster>.mongodb.net/jitterbit_db?retryWrites=true&w=majority"
port = 3000
```

## ▶️ Execução

Para rodar a API localmente:
```bash
node server.js
```
O servidor iniciará em `http://localhost:3000`

## 📖 Documentação (Swagger)

Acesse a documentação interativa para ver os schemas e testar os endpoints:

👉 `http://localhost:3000/api-docs`

## 🧪 Testes com Postman

O repositório inclui uma coleção de testes pronta para importação.

1. Localize o arquivo `jitterbit_collection.json` na pasta `/postman`.
2. Abra o Postman e clique em **Import**.
3. Selecione o arquivo JSON.
4. Execute as requisições (a variável `{{base_url}}` já vem configurada como localhost).

### Dicas Importantes para Testes Manuais
⚠️ **Erro Comum:** Ao fazer requisições `POST` ou `PUT`, certifique-se de configurar o Header corretamente no seu cliente HTTP (Postman/Insomnia/CURL):
* **Key:** `Content-Type`
* **Value:** `application/json`

Sem isso, o corpo da requisição chegará vazio e a API retornará erro 400.

---

## 📡 Endpoints Principais

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| **POST** | `/order` | Cria um novo pedido. Transforma o JSON de entrada (PT-BR) para o schema do banco (EN). |
| **GET** | `/order/list` | Lista todos os pedidos cadastrados. |
| **GET** | `/order/{id}` | Busca um pedido específico pelo ID transformado (ex: `v10089015vdb`). |
| **PUT** | `/order/{id}` | Atualiza um pedido. Aceita tanto o formato original (PT-BR) quanto o formato do banco (EN). |
| **DELETE** | `/order/{id}` | Remove um pedido do banco de dados. |

## 📦 Exemplo de Payloads

**Entrada (POST / PUT):**
```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.529Z",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
```

**Saída Armazenada (GET):**
```json
{
  "orderId": "v10089015vdb",
  "value": 10000,
  "creationDate": "2023-07-19T12:24:11.529Z",
  "items": [
    {
      "productId": 2434,
      "quantity": 1,
      "price": 1000
    }
  ]
}
```
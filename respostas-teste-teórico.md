# Teste Teórico - Jitterbit Professional Services
**Candidato:** Ariel Gideon Ramos

---

## 1. JavaScript

**1. Qual é o operador lógico usado para verificar a negação de uma expressão?**
* **Resposta:** `c) !`

**2. Qual dos seguintes métodos é usado para adicionar um elemento ao final de um array?**
* **Resposta:** `a) push() `

**3. O que o método “Array.map()” faz?**
* **Resposta:** `b) Mapeia os elementos de um array para um novo array com base em uma função de mapeamento. `

**4. Qual é a função do método “Array.filter()”?**
* **Resposta:** `b) Remover elementos do array com base em uma função de filtro.`

**5. O que é async/await em JavaScript?**
* **Resposta:** `c) Um conjunto de palavras-chave que tornam as funções assíncronas mais legíveis e fáceis de usar.`

**6. Qual é a sintaxe correta para definir uma função assíncrona chamada "getData"?**
* **Resposta:** `c) async function getData() { return new Promise({}); } `

**7. O que será impresso no código (Switch Case)?**
* **Resposta:** `b) A. `

**8. Função “somaImpares”:**
```javascript
function somaImpares(n) {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            soma += i;
        }
    }
    return soma;
}
// Exemplo: somaImpares(5) retorna 9 
```
**9. Função “inverterPalavra”:**
```javascript
function inverterPalavra(str) {
    // Divide a string em array, inverte e junta novamente
    return str.split('').reverse().join('');
}
// Exemplo: inverterPalavra("javascript") retorna "tpircsavaj" 
```

**10. Considere o trecho de código da função `dividirNumeros`. Escreva abaixo o resultado retornado por cada função:**
* **a) `console.log(dividirNumeros(20, 2));`**
    * Resultado: `10`
* **b) `console.log(dividirNumeros(6, 0));`**
    * Resultado: `"Erro: Divisão por zero não é permitida."`
* **c) `console.log(dividirNumeros(21, 3));`**
    * Resultado: `7`

**11. Como você pode percorrer e mapear um array JSON em JavaScript? Explique como usar métodos como "map", "forEach" ou "for...of".**

**Resposta:** Para percorrer e manipular arrays JSON, utilizamos os métodos iterativos. 

* O `map` é utilizado quando desejamos transformar os dados, criando um novo array com os resultados da função aplicada a cada item. 
* O `forEach` é usado apenas para iterar sobre os elementos e executar uma ação (como um log ou atualização externa) sem retornar um novo array. 
* O `for...of` é uma estrutura de loop que permite percorrer os valores do array de forma mais direta.

**12. O que são variáveis em JavaScript? Explique como declarar e atribuir valores a uma variável.**

**Resposta:** Variáveis são espaços de memória nomeados utilizados para armazenar dados (valores) que podem ser usados e manipulados pelo programa. Em JavaScript, declaramos variáveis usando palavras-chave que definem seu escopo: 

* `var` (escopo de função ou global)
* `let` (escopo de bloco, permitindo que seja modificada)
* `const` (escopo de bloco, valor fixo/constante). 

A atribuição é feita utilizando o sinal de igual (`=`), onde o valor à direita é armazenado na variável à esquerda.

**13. Em JavaScript, é possível ter múltiplas condições em uma estrutura "if/else"? Descreva como usar operadores lógicos.**
* **Resposta:** Sim, é possível. Utilizamos operadores lógicos para combinar múltiplas condições dentro de um mesmo `if`. O operador `&&` (E) exige que todas as condições sejam verdadeiras para entrar no bloco. O operador `||` (OU) exige que pelo menos uma das condições seja verdadeira.

**14. Sintaxe do bloco "try" e exemplo.**
* **Resposta:** O bloco `try` permite definir um bloco de código a ser testado e garantir que caso ele falhe um erro seja retornado para a aplicação.

```javascript
try {
    let resultado = funcaoInexistente(); // Código suscetível a erro
} catch (error) {
    console.log("Ocorreu um erro: " + error.message);
}
```

---

## 2. SQL

**1. Como você seleciona todas as colunas de uma tabela em SQL?**
* **Resposta:** b) SELECT *

**2. Qual é o comando SQL utilizado para filtrar resultados em uma consulta?**
* **Resposta:** d) WHERE

**3. Qual é o comando SQL utilizado para ordenar os resultados de uma consulta em ordem ascendente?**
* **Resposta:** d) ORDER BY

**4. Qual é o comando SQL utilizado para inserir novos dados em uma tabela?**
* **Resposta:** b) INSERT

**5. Qual é o comando SQL utilizado para atualizar dados em uma tabela?**
* **Resposta:** b) UPDATE

---

## 3. Integração de Sistemas

**1. O que é integração de sistemas?**
* **Resposta:** a) É um processo de comunicação entre diferentes sistemas de computador para permitir o compartilhamento de dados e funcionalidades.

**2. O que significa API (Interface de Programação de Aplicativos) em integração de sistemas?**
* **Resposta:** c) Um conjunto de funções e procedimentos que permitem a comunicação entre sistemas.

**3. O que é um Web Service?**
* **Resposta:** c) É uma solução para conectar sistemas diferentes via web, usando padrões como XML e SOAP.

**4. O que é um token de acesso em integração de sistemas?**
* **Resposta:** c) Uma chave de autenticação usada para autorizar o acesso a um serviço.

**5. O que é um "webhook" na integração de sistemas?**
* **Resposta:** d) É uma URL pública fornecida por um sistema para receber notificações automáticas de outro sistema.

**6. O que é JSON?**
* **Resposta:** c) Um formato de dados leve e de fácil leitura usado para trocar informações entre sistemas.

**7. Qual é o código de status HTTP que indica sucesso na solicitação?**
* **Resposta:** a) 200 OK.

**8. O que são headers HTTP?**
* **Resposta:** b) Informações adicionais enviadas pelo cliente e servidor em uma solicitação ou resposta HTTP.

**9. Quais são os delimitadores usados para marcar tags em XML?**
* **Resposta:** d) < >

**10. Qual é a diferença entre integração de sistemas síncrona e assíncrona?**
* **Resposta:** a) Na síncrona, a comunicação ocorre em tempo real com respostas imediatas, enquanto na assíncrona, a resposta pode ser recebida em um momento posterior.
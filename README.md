# Conversor de Moedas

API REST simples para conversão de moedas utilizando a [Exchange Rate API](https://www.exchangerate-api.com/).

## 🚀 Tecnologias

- **Node.js** - Ambiente de execução JavaScript
- **Fastify** - Framework web rápido e leve
- **dotenv** - Gerenciamento de variáveis de ambiente

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- Conta na [Exchange Rate API](https://www.exchangerate-api.com/) para obter uma chave de API

## ⚙️ Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd conversor-moedas
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
   - Renomeie o arquivo `.env.example` para `.env` (ou crie um novo)
   - Adicione sua chave da API:
```
API_KEY=sua_chave_aqui
PORT=3333
```

## ▶️ Executando o projeto

```bash
npm start
```

O servidor será iniciado em `http://localhost:3333` (ou na porta definida no arquivo `.env`).

## 📌 Endpoints

### Converter Moeda

Converte um valor de uma moeda para outra.

**URL:** `GET /converter`

**Parâmetros Query:**
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|--------------|-----------|
| from | string | ✅ | Código da moeda de origem (ex: USD, BRL, EUR) - 3 letras |
| to | string | ✅ | Código da moeda de destino (ex: USD, BRL, EUR) - 3 letras |
| amount | number | ✅ | Valor a ser convertido |

**Exemplo de requisição:**
```
GET /converter?from=USD&to=BRL&amount=100
```

**Resposta:**
```json
{
  "de": "USD",
  "para": "BRL",
  "valor_original": 100,
  "valor_convertido": 498.5
}
```

### Listar Moedas Disponíveis

Lista todos os códigos de moedas suportados pela API.

**URL:** `GET /listar`

**Exemplo de requisição:**
```
GET /listar
```

**Resposta:**
```json
[
  { "codigo": "USD", "nome": "United States Dollar" },
  { "codigo": "BRL", "nome": "Brazilian Real" },
  { "codigo": "EUR", "nome": "Euro" }
  // ... mais moedas
]
```

## 📁 Estrutura do Projeto

```
conversor-moedas/
├── .env              # Variáveis de ambiente (não versionar)
├── .gitignore        # Arquivos ignorados pelo Git
├── package.json      # Dependências e scripts
├── package-lock.json # Lock das dependências
├── server.js         # Servidor principal
└── README.md         # Este arquivo
```

## 🔧 Scripts Disponíveis

| Script | Descrição |
|--------|------------|
| `npm start` | Inicia o servidor |
| `npm test` | Executa testes (não configurado) |

## ⚠️ Observações

- A API de conversão depende de uma conexão com a internet para buscar as taxas de câmbio em tempo real.
- Algumas moedas podem não estar disponíveis dependendo do plano da API.
- Os dados de conversão são fornecidos pela Exchange Rate API e podem ter um pequena latência.

## 📄 Licença

ISC
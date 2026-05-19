# Cypress Automation Tests 💻💙

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![BDD](https://img.shields.io/badge/BDD-Given%2FWhen%2FThen-6DB33F?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Ativo-brightgreen?style=for-the-badge)

---

## 📋 Sobre o projeto

Repositório de testes automatizados desenvolvidos com **Cypress**, aplicando boas práticas de QA como BDD, cenários positivos e negativos, e documentação clara de cada caso de teste.

>  *QA não é sobre encontrar erros — é sobre não deixar eles chegarem até o usuário.*

---

## 📁 Estrutura do projeto

```
cypress-automation-tests/
├── cypress.config.js
└── cypress/
    └── e2e/
        └── login/
            ├── login-sucesso.cy.js     → Cenários positivos de autenticação
            └── login-invalido.cy.js    → Cenários negativos de autenticação
```

---

## 🔐 Módulo: Login

### ✅ login-sucesso.cy.js — Cenários positivos

| Cenário | Descrição |
|--------|-----------|
| Login com credenciais válidas | Valida redirecionamento e criação do cookie de autenticação |
| Manutenção de sessão | Valida que a sessão persiste ao navegar para outra página |

### ❌ login-invalido.cy.js — Cenários negativos

| Cenário | Descrição |
|--------|-----------|
| Senha errada | Valida bloqueio e ausência do cookie de autenticação |
| Usuário inexistente | Valida que o sistema não autentica dados fictícios |
| Campos vazios | Valida que o formulário não é submetido sem preenchimento |

---

## 🚀 Como executar

```bash
# Instalar dependências
npm install

# Abrir o Cypress em modo interativo
npx cypress open

# Executar os testes em modo headless
npx cypress run
```

---

## 🛠️ Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) — Framework de automação de testes
- **JavaScript** — Linguagem dos testes
- **BDD** — Estrutura Given/When/Then nos cenários
- **Fixtures** — Gerenciamento de dados de teste

---

## 👩‍💻 Autora

**Beatriz Salgado** — QA Analyst

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/beatriz-salgadoo)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/BiahSalgado)

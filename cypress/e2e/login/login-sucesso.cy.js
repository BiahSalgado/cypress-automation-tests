// =================================================================
// Login com sucesso — Cenário positivo
// =================================================================
// Valida que o login funciona corretamente com credenciais válidas.
//
// O que este teste faz:
//   1. Acessa a tela de login do CUBO
//   2. Preenche Cliente, Login e Senha com dados válidos
//   3. Submete o formulário
//   4. Verifica que saiu da tela de login
//   5. Verifica que o cookie de autenticação foi criado
//
// Pré-requisitos:
//   - users.json com o perfil 'atendimento' configurado
//   - HOMOL acessível
// =================================================================

describe('Login com sucesso', () => {

  it('deve fazer login com credenciais válidas e redirecionar para o sistema', () => {
    cy.fixture('users').then((users) => {
      const { cliente, login, senha } = users.atendimento;

      // 1. Acessa a tela de login
      cy.visit('/Account/Login');

      // 2. Preenche os campos
      cy.get('input[name="cliente"]', { timeout: 10000 }).clear().type(cliente);
      cy.get('input[name="login"]').clear().type(login);
      cy.get('input[name="senha"]').clear().type(senha, { log: false }); // log:false esconde a senha

      // 3. Submete o formulário
      cy.get('form').submit();

      // 4. Verifica que saiu da tela de login
      cy.url({ timeout: 15000 }).should('not.include', 'Login');

      // 5. Verifica que NÃO caiu na tela de verificação de código (MFA)
      cy.url().should('not.include', 'VerifyCode');

      // 6. Verifica que o cookie de autenticação existe
      cy.getCookie('.ASPXAUTH').should('exist');
    });
  });

  it('deve manter a sessão após navegar para outra página', () => {
    // Usa o comando customizado para logar
    cy.loginCubo('atendimento');

    // Navega para a home
    cy.visit('/');

    // Verifica que continua autenticado (não voltou pro login)
    cy.url({ timeout: 10000 }).should('not.include', 'Login');

    // Cookie ainda deve existir
    cy.getCookie('.ASPXAUTH').should('exist');
  });
});

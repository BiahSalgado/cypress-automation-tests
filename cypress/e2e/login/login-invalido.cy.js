// =================================================================
// Login inválido — Cenários negativos
// =================================================================
// Valida que o sistema bloqueia login com credenciais erradas.
//
// O que este teste faz:
//   1. Tenta login com senha errada
//   2. Verifica que permanece na tela de login
//   3. Tenta login com usuário inexistente
//   4. Verifica que permanece na tela de login
//
// Pré-requisitos:
//   - users.json com o perfil 'atendimento' configurado
//   - HOMOL acessível
// =================================================================

describe('Login inválido', () => {

  beforeEach(() => {
    cy.visit('/Account/Login');
    cy.get('input[name="cliente"]', { timeout: 10000 }).should('be.visible');
  });

  it('deve bloquear login com senha errada', () => {
    cy.fixture('users').then((users) => {
      const { cliente, login } = users.atendimento;

      // Preenche com login real mas senha errada
      cy.get('input[name="cliente"]').clear().type(cliente);
      cy.get('input[name="login"]').clear().type(login);
      cy.get('input[name="senha"]').clear().type('SenhaErrada@999');

      // Submete
      cy.get('form').submit();

      // Deve permanecer na tela de login (não redirecionou)
      cy.url({ timeout: 10000 }).should('include', 'Login');

      // NÃO deve ter o cookie de autenticação
      cy.getCookie('.ASPXAUTH').should('not.exist');
    });
  });

  it('deve bloquear login com usuário inexistente', () => {
    // Preenche com dados totalmente fictícios
    cy.get('input[name="cliente"]').clear().type('clienteinexistente');
    cy.get('input[name="login"]').clear().type('usuario_que_nao_existe');
    cy.get('input[name="senha"]').clear().type('Qualquer@123');

    // Submete
    cy.get('form').submit();

    // Deve permanecer na tela de login
    cy.url({ timeout: 10000 }).should('include', 'Login');

    // NÃO deve ter o cookie de autenticação
    cy.getCookie('.ASPXAUTH').should('not.exist');
  });

  it('deve bloquear login com campos vazios', () => {
    // Limpa todos os campos
    cy.get('input[name="cliente"]').clear();
    cy.get('input[name="login"]').clear();
    cy.get('input[name="senha"]').clear();

    // Submete o formulário vazio
    cy.get('form').submit();

    // Deve permanecer na tela de login
    cy.url({ timeout: 10000 }).should('include', 'Login');

    // NÃO deve ter o cookie de autenticação
    cy.getCookie('.ASPXAUTH').should('not.exist');
  });
});

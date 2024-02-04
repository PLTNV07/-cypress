describe('Автотесты на форму логина и пароля', function () {
   it('Позитивный автотест на форму авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('***');
        cy.get('#pass').type('***');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

   it('Автотест на восстановление пароля', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#forgotEmailButton').click();
       cy.get('#forgotForm > .header').should('be.visible').contains('Восстановите пароль');
       cy.get('#mailForgot').type('***');
       cy.get('#restoreEmailButton').click();
       cy.get('#messageHeader').should('be.visible').contains('Успешно отправили пароль на e-mail');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})
   it('Негавтивный автотест на проверку неверного логина', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('***');
        cy.get('#pass').type('***');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       
})
   it('Негавтивный автотест на проверку неверного пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('***');
        cy.get('#pass').type('***');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})
   it('Негативный автотест на проверку валидации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('***');
        cy.get('#pass').type('***');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

   it('Автотест на проверку приведения к строчным буквам логина', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('***');
        cy.get('#pass').type('***');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})

   })

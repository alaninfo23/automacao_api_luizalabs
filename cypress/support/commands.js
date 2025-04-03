Cypress.Commands.add('criarUsuario', (status, mensagemEsperada) => {
    const timestamp = Date.now();
    const user = {
        nome: 'José Alan',
        email: `teste${timestamp}@example.com`,
        password: '123456',
        administrador: 'true'
    };

    return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: user
    }).then((response) => {
        expect(response.status).to.eq(status);
        expect(response.body).to.have.property('_id');
        expect(response.body.message).to.eq(mensagemEsperada);

        return cy.wrap(user);
    });
});


Cypress.Commands.add('realizarLogin', (email, senha, statusEsperado, mensagemEsperada) => {
    return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: {
            email: email,
            password: senha
        },
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(statusEsperado);
        
        if (mensagemEsperada) {
            expect(response.body).to.have.property('message', mensagemEsperada);
        }
    });
});



Cypress.Commands.add('criarProduto', (status, mensagemEsperada) => {
    const timestamp = Date.now();
    const produto = {
        nome: `Produto ${timestamp}`,
        preco: 470,
        descricao: 'Mouse',
        quantidade: 381
    };

    return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/produtos',
        body: produto
    }).then((response) => {
        expect(response.status).to.eq(status);
        expect(response.body).to.have.property('_id');

        if (response.body.message) {
            expect(response.body.message).to.eq(mensagemEsperada);
        }

        return cy.wrap(response.body);
    });
});


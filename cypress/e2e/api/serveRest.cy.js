import { generateUser } from './requests/serveRest';

describe('Casos de Teste do ServeRest', () => {
    let user, userId;

    before('Caso de Teste 01 - Cadastrar Usuário com Sucesso', () => {
        user = generateUser();

        cy.api_postUsuarios(user.nome, user.email, user.password, user.administrador).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
            userId = response.body._id;
        });
    });

    it('Caso de Teste 02 - Listar Usuários com Sucesso', () => {
        cy.api_getListarUsuarios().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
            expect(response.body.usuarios.length).to.be.greaterThan(0);
        });
    });

    it('Caso de Teste 03 - Realizar Login com Sucesso', () => {
        cy.api_postLogin(user.email, user.password).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.contain('Login realizado com sucesso');
            expect(response.body.authorization).to.be.not.null;
        });
    });

    it('Caso de Teste 04 - Não Deve Realizar Login com Usuário Inexistente', () => {
        const fakeUser = generateUser();

        cy.api_postLogin(fakeUser.email, fakeUser.password).then((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.message).to.contain('Email e/ou senha inválidos');
        });
    });

    it('Caso de Teste 05 - Deletar Usuário com Sucesso', () => {
        cy.api_deleteUsuarios(userId).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.contain('Registro excluído com sucesso');
        });
    });
});

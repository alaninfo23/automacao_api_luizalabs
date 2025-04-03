import { faker } from '@faker-js/faker';

const API_URL = Cypress.env('API_BASE_URL')

Cypress.Commands.add('api_postLogin', (email, password) => {
    cy.request({
        method: 'POST',
        url: `${API_URL}/login`,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: {
            "email": email,
            "password": password
        },
        failOnStatusCode: false
    })
})

Cypress.Commands.add('api_postUsuarios', (nome, email, password, administrador) => {
    cy.request({
        method: 'POST',
        url: `${API_URL}/usuarios`,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: {
            "nome": nome,
            "email": email,
            "password": password,
            "administrador": administrador
        },
        failOnStatusCode: false
    })
})

Cypress.Commands.add('api_getListarUsuarios', () => {
    cy.request({
        method: 'GET',
        url: `${API_URL}/usuarios`,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false
    })
})

Cypress.Commands.add('api_deleteUsuarios', (_id) => {
    cy.request({
        method: 'DELETE',
        url: `${API_URL}/usuarios/` + _id,
        headers: {
            Accept: 'application/json'
        },
        failOnStatusCode: false
    })
})

export const generateUser = (admin = false) => ({
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: admin ? 'true' : 'false'
});

module.exports = { generateUser };
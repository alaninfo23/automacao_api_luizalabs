## Sobre o Projeto
O [ServeRest](https://serverest.dev/) O ServeRest é uma API REST gratuita que simula uma loja virtual com intuito de servir de material de estudos de testes de API.

Este documento contém alguns **casos de teste funcionais**, validando o funcionamento da aplicação.

## Setup

### Pré-requisitos:
✔️ Instalar o NodeJS \
✔️ Instalar um editor de texto, como o Visual Studio Code \
✔️ Instalar o Git (caso queira trabalhar com projeto em sua máquina)

### Execução

Para executar os testes em sua máquina, você pode baixar esse projeto usando o Github e seguir os passos abaixo:

1. Instalar as dependências configuradas do `package.json`, usando o comando: `npm install`
2. Executar a interface com o comando `npx cypress open`
---

## Casos de Teste do ServeRest

### Caso de Teste 01 - Cadastrar Usuário com Sucesso  
**Objetivo:** Garantir que um novo usuário possa ser cadastrado corretamente na API.  

#### **Pré-condições:**  
- Nenhum usuário existente com o mesmo e-mail.  

#### **Passos:**  
1. Enviar uma requisição `POST` para `/usuarios` com um corpo contendo nome, e-mail, senha e perfil.  
2. Validar que a resposta retorna um status `201 Created`.  
3. Verificar se a mensagem `"Cadastro realizado com sucesso"` é retornada no corpo da resposta.  

#### **Resultado Esperado:**  
✔️ A API deve retornar a mensagem `"Cadastro realizado com sucesso"`.  
✔️ O status da resposta deve ser `201 Created`.  
✔️ O usuário deve ser salvo no banco de dados.  

---

### Caso de Teste 02 - Listar Usuários com Sucesso  
**Objetivo:** Garantir que a API retorna a lista de usuários cadastrados.  

#### **Pré-condições:**  
- Deve haver pelo menos um usuário cadastrado na API.  

#### **Passos:**  
1. Enviar uma requisição `GET` para `/usuarios`.  
2. Validar que a resposta retorna um status `200 OK`.  
3. Verificar se a resposta contém a lista de usuários cadastrados.  

#### **Resultado Esperado:**  
✔️ A API deve retornar uma lista de usuários cadastrados.  
✔️ O status da resposta deve ser `200 OK`.  

---

### Caso de Teste 03 - Deletar Usuário com Sucesso  
**Objetivo:** Garantir que um usuário cadastrado possa ser excluído corretamente.  

#### **Pré-condições:**  
- O usuário já deve estar cadastrado na API.  

#### **Passos:**  
1. Enviar uma requisição `DELETE` para `/usuarios/{id}` com um ID válido.  
2. Validar que a resposta retorna um status `200 OK`.  
3. Verificar se a mensagem `"Registro excluído com sucesso"` é retornada no corpo da resposta.  

#### **Resultado Esperado:**  
✔️ A API deve retornar a mensagem `"Registro excluído com sucesso"`.  
✔️ O status da resposta deve ser `200 OK`.  
✔️ O usuário deve ser removido do banco de dados.  

---

### Caso de Teste 04 - Realizar Login com Sucesso  
**Objetivo:** Garantir que um usuário cadastrado consiga autenticar-se corretamente na API.  

#### **Pré-condições:**  
- O usuário já está cadastrado na API.  

#### **Passos:**  
1. Enviar uma requisição `POST` para `/login` com um corpo contendo um e-mail e senha válidos.  
2. Validar que a resposta retorna um status `200 OK`.  
3. Verificar se o token de autenticação é retornado no corpo da resposta.  

#### **Resultado Esperado:**  
✔️ A API deve retornar um `token` válido.  
✔️ O status da resposta deve ser `200 OK`.  
✔️ O usuário deve conseguir acessar endpoints protegidos utilizando o token gerado.  

---

### Caso de Teste 05 - Não Deve Realizar Login com Usuário Inexistente  
**Objetivo:** Garantir que a API não permita login com credenciais inválidas.  

#### **Pré-condições:**  
- O usuário não existe na base de dados.  

#### **Passos:**  
1. Enviar uma requisição `POST` para `/login` com um e-mail e/ou senha inválidos.  
2. Validar que a resposta retorna um status `401 Unauthorized`.  
3. Verificar se a mensagem `"Email e/ou senha inválidos"` é retornada no corpo da resposta.  

#### **Resultado Esperado:**  
✔️ A API deve retornar a mensagem `"Email e/ou senha inválidos"`.  
✔️ O status da resposta deve ser `401 Unauthorized`.  
✔️ O usuário não deve obter um token de autenticação.  

---

**Autor:** José Alan dos Santos Rocha
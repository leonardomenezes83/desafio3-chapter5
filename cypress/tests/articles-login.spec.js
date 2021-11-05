/// <reference types = "cypress" />

describe('Verificações de Login', () => {

    it('Login com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.realworld.io/api/users/login',
            body: {
                user: {
                    "email": "leonardormenezes83@gmail.com",
                    "password": "bootcamp@123"
                }
            }, 
        }).then(response => {
            //Wconsole.log(response)
            expect(response.status).to.eq(200)
            expect(response.body.user.token).not.null

        })
    })

    it.only('Senha inválida', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.realworld.io/api/users/login',
            failOnStatusCode: false,
            body: {
                user: {
                    "email": "leonardormenezes83@gmail.com",
                    "password": "123"
                }
            },
        }).then(response => {
            //console.log(response.body.errors.)
            expect(response.status).to.eq(403)
            expect(response.body.errors['email or password'].[0]).to.eq('is invalid')
            expect(response.body.user).to.undefined
            //ou not.exist
            //expect(response.body.user).not.exist

        })

    })
    it('Login ou senha em branco', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.realworld.io/api/users/login',
            failOnStatusCode: false,
            body: {
                user: {
                    "email": "",
                    "password": ""
                }
            },
        }).then(response => {
            console.log(response)
            expect(response.status).to.eq(422)
            expect(response.body.errors.email[0]).eq("can't be blank")
            expect(response.body.user).to.undefined
            //ou not.exist
            //expect(response.body.user).not.exist

        })
    });
});

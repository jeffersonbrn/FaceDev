import mock from '../utils/mock'

{/*mock.onPost('/api/home/login').reply(200,{
   'id': 1, 
    'username': 'Bruno Reis',
    'email': 'jeffersonbrn@live.com'
 })*/}

mock.onPost('/api/home/login').reply((config) =>{
    console.log(config)
    const { email, password } = JSON.parse(config.data)

    if(email !== 'jeffersonbrn@live.com' || password !== 'admin') {
        return [400, {message: 'Sua senha ou e-mais estão incorretos'}]
    }

    const user = {
        id: 1, 
        name: 'Bruno Reis',
        username: 'jeffersonbrn',
        email: 'jeffersonbrn@live.com'
    }

    return [200, {user}]
})
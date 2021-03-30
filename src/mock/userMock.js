import mock from '../utils/mock'

mock.onPost('/api/home/login').reply(200,{
    'id': 1, 
    'username': 'Bruno Reis',
    'email': 'jeffersonbrn@live.com'
})
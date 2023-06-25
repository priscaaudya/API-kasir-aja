const request = require('supertest')
module.export = function auth () {
    const response = request('https://kasir-api.belajarqa.com')//baseurl
    .post('/authentications')//endpoint
    .send({
        "email":"priscaaudyaa@gmail.com",
        "password": "prisca123"
    })
    token = response.body.data.accessToken
    
    return token
    
}
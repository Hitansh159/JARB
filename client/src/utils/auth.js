const axios = require('axios')

async function signUpRequest(name, id, password) {
    let result = await axios({
        method: 'post',
        url: 'http://localhost:3500/users/addUser',
        data: {
            name: name,
            id: id,
            password: password
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log("Error:", error);
        });
    console.log(result);
}

async function signInRequest(id, password) {
    let result = await axios({
        method: "post",
        url: 'http://localhost:3500/auth/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: { "id": id, "password": password }
    })
    if(result.data.err){
        console.err(result.err);
    }
    return result.data.token;

}

module.exports = { signUpRequest: signUpRequest, signInRequest, signInRequest };
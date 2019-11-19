export default function login(usuario,password){    
    fetch('http://10.13.26.249:3000/login', {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({

        username : usuario,
        password : password,
        }),
    });
}
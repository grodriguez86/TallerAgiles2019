export default function login(usuario,password){    
    fetch('http://172.29.14.159:3000/login', {
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

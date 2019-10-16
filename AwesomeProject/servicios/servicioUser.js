export default function guardarUsuario(usuario){    
    fetch('http://172.29.14.69:3000/user', {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        username = usuario.usuario,
        password = usuario.password,
        apellido = usuario.apellido,
        direccion = usuario.direccion,
        email = usuario.email,
        nombre = usuario.nombre,
        telefono = usuario.telefono,
        fecha_nacimiento = usuario.fechanac
        }),
    });
}
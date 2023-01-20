
const validation = (userData) => {
    let errors={};

    if( ! /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userData.username)){
        errors.username = 'El email es invalido;'
    }
    if(!userData.username){
        errors.username = 'Este campo no puede estar vacío';
    }
    if(userData.username.length>35){
        errors.username = 'No puede tener más de 35 caracteres';
    }
    if(!userData.password.match(/\d/)){
        errors.password = 'Debe tener al menos un número';
    }
    if(userData.password<6 && userData.password>10){
        errors.password= 'Debe tener entre 6 y 10 caracteres';
    }
}


export default validation;
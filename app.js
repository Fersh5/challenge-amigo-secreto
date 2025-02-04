// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let friends = [];

function addFriend(){
    let input = document.querySelector('#amigo');
    if (verifyData(input)){
        friends.push(capitalize(input.value));
        showListFriends();
    }
    input.value = ''; 
}

function verifyData(input){
    let validate = input.value.trim();
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (input.value == null || input.value.length == 0){
        alert('Por favor, ingresa un nombre.');
        return false;
    } else if (!regex.test(validate)){
        alert('Por favor, ingresa un nombre valido.');
        return false;
    } else if (friends.includes(capitalize(input.value))){
        alert('Ya añadiste a este amigo.');
        return false;
    } else {
        return true;
    }
}

function showListFriends(){
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
    for (let i=0; i<friends.length;i++){
        let newElement = document.createElement('li');
        newElement.textContent=friends[i];
        lista.appendChild(newElement);
    }
}

function secretFriend(){
    if (friends.length){
        let result = document.querySelector('#resultado');
        result.innerHTML='';
        indexFriend= Math.floor(Math.random()*friends.length);
        let friend = document.createElement('li');
        friend.textContent=friends[indexFriend];
        result.appendChild(friend);
    }else { 
        alert('Aún no ingresas ningun nombre.');
    }
}

function capitalize(nombre) {
    return nombre.toLowerCase().replace(/\b\w/g, letra => letra.toUpperCase());
}
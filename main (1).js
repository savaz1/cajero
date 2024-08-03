

function iniciarSesion(){

    let username = document.getElementById("usuario");
    let password = document.getElementById("password").value;
    let mensaje = document.getElementById("error");
    let cuentas = [
        { nombre: "Mali", contra3, saldo: 200 }
        { nombre: "Gera", contra2, saldo: 290 }
        { nombre: "Maui", contraseña: contra1, saldo: 67 } ];




    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }

    if(username.value === "12345" && password === "Hola"){
        window.location.href = "cajero.html"
    }else{
        mensaje.style.color="red";
        mensaje.innerText="Contraseña invalida" 
    }
}

function cerrarSesion(){
    window.location.href = "index.html"
}
function retirar(){
    window.location.href = "Retirardinero.html"
}
function depositar(){
    window.location.href = "deposito.html"
}
function consultar(){
    window.location.href = "consultarsaldo.html"
}


//hoja depositar
function agregardinero(){
    
    let a = Number(document.getElementById("agregado").value);
    let b = 1;
    let resultado = a+b;
    
    if (resultado <= 990 && resultado >= 10){
        
    document.getElementById("resultado").innerHTML="Su saldo es " + resultado  }
    
    else{ document.getElementById("resultado").innerHTML="Deposito no valido" }
    }


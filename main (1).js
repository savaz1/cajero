

let cuentas = [ // usuarios
    // 1, "dsfsd", false
    { nombre: "robot", user: "ROBOTO", contra: "12345", saldo: 200 }, // 0
    // objeto (literales) { propiedad: valor }
    { nombre: "Sam", user: "Savaz", contra: "12345", saldo: 290 }, // 1
    { nombre: "Rul", user: "RULAS" , contra: "12345", saldo: 67 } // 2
]; // lenght es 3

function iniciarSesion(){

    let username = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    let mensaje = document.getElementById("error");

    // recupero valores del formulario html y guardo en variables
    for (let index = 0; index < cuentas.length; index++) {
        const cuenta = cuentas[index];
        console.log (cuenta);
 

    if( username == cuenta.nombre && password == cuenta.contra){
       
        localStorage.setItem('matriz', JSON.stringify(cuentas));
        window.location.href = "cajero.html"
        break;

   

    }else{
        mensaje.style.color="red";
        mensaje.innerText="Contraseña invalida" 
        
    }

}}




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

var datos = JSON.parse(localStorage.getItem('matriz'));
//hoja depositar
function agregardinero(){
    
    let a = Number(document.getElementById("agregado").value);
    let b = datos.saldo;
    console.log(datos.saldo);
    let resultado = a+b;
    console.log(datos.saldo);
    
    if (resultado <= 990 && resultado >= 10){
        
    document.getElementById("resultado").innerHTML="Su saldo es " + resultado  }
    
    else{ document.getElementById("resultado").innerHTML="Deposito no valido" }
    }


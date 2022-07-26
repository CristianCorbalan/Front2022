let btn_enviar = document.getElementById("btn_enviar");
btn_enviar.addEventListener("Click", mostrar);

function mostrar(){
    let nombre = "anonimo";
    let inputNombre = document.getElementById("inputNombre");
    nombre = inputNombre.value;

    alert("Bienvenido " + nombre);
}

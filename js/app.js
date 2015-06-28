var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
var dniUsuario = prompt("Introduce tu numero de DNI (sin la letra)");
var letraUsuario = prompt("Introduce tu letra de tu DNI (en mayuscula)");
letra = letra.toUpperCase();

if(dniUsuario <= 0 || dniUsuario > 99999999) {
  alert("numero no valido");
}
else {
    var numeroCalculado = dniUsuario % 23;
    var resultado = letras[numeroCalculado];
    if (resultado == letraUsuario) {
      alert("Hubo Coincidencia");
    }
    else {
      alert("No hubo coincidencia");
    }
}

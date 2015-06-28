var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
var dniUsuario = 38285719;
var letraUsuario = "R";
//var letra =
if(dni <= 0 || dni > 99999999) {
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

do{
  var originalText=prompt("Ingrese texto");  //validar que ingrese texto
}while(!originalText);

do{
  var option=parseInt(prompt("Elija opcion \n 1.Encriptar \n 2.Desencriptar")); //validar que ingrese opcion
}while(!option);
var cont=0;
for(var i=0;i<originalText.length;i++){
  if(isNaN(originalText[i])===false){
    cont=1;
  }
}
if(cont===1){
  alert('ERROR')
}
else {
  if(option===1){  //si elige la opcion1
    function cipher(originalText){
      var newString='';  //va almacenar a la nueva cadena
      for(var i=0;i<originalText.length;i++){ //recorre todas las letras de la cadena
        var oCesar=(((originalText[i].charCodeAt()-65)+33)%26)+65; //realiza la operacion
        var operation=String.fromCharCode(oCesar);  //lo convierte a letra
        if(originalText!==originalText.toUpperCase()){ //para ver si es mayuscula
          operation=operation.toLowerCase();
        }
        newString += operation;  //almacena las nuevas letras
      }
      return newString; //retorna la nueva cadena
    }
    alert("El texto encriptado es: "+ cipher(originalText));
  }
  else{
    function decipher(encryptedText){
      var newString=''; //donde va almacenar la nueva cadena
      for(var j=0;j<encryptedText.length;j++){ //recorre todas las letras
        var operation=(((encryptedText[j].charCodeAt()-65)-33)%26)+26+65 //realiza la operacion como sale en negativo se le suma mas 26
        if((encryptedText[j].charCodeAt()-65)-33===-26){ //para la letra A se realiza la excepcion
          operation=65;
        }
        operation=String.fromCharCode(operation); //lo convierte a letras
        if(encryptedText!==encryptedText.toUpperCase()){ //para ver si es mayusculas
          operation=operation.toLowerCase();
        }
       newString +=operation; //almacena las nuevas letras
     }
      return newString; //retorna la nueva cadena
    }
    alert("El texto desencriptado es: "+decipher(originalText));
  }
}

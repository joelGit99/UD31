var array = [];

array.length = 36000;

for(var i = 0; i < array.length; i++) {
    var dado1 = Math.floor(Math.random() * 6) + 1;
    var dado2 = Math.floor(Math.random() * 6) + 1;
    var suma = dado1 + dado2;
    array[i] = suma;
    document.write(dado1);
    document.write(dado2);
}
"use strict";
window.onload = function () {
    const button = document.getElementById("submit");
    const input = document.getElementById('palavra');
    if (button && input) {
        button.onclick = function () {
            window.alert('Total de Vogais: ' + totalVogais(input['value']));
        };
    }
};
let totalVogais = function (palavra) {
    let total = 0;
    let vogais = "aeiou";
    for (let index = 0; index < palavra.length; index++) {
        const letra = palavra[index].toLowerCase();
        if (vogais.includes(letra)) {
            total++;
        }
    }
    return total;
};
console.log(totalVogais("Acessibilidade"));

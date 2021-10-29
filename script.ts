window.onload = function (): void {
    const button = document.getElementById("submit");
    const input = document.getElementById('palavra') as HTMLInputElement;
    if (button && input) {
        button.onclick = function () {
            window.alert('Total de Vogais: cd ..' + totalVogais(input.value));
        }
    }
}

let totalVogais = function (palavra: string): number {
    let total = 0;
    let vogais = "aeiou"
    for (let index = 0; index < palavra.length; index++) {
        const letra = palavra[index].toLowerCase();
        if (vogais.includes(letra)) {
            total++
        }
    }
    return total;
}
console.log(totalVogais("Acessibilidade"))
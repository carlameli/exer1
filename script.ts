window.onload = function (): void {
    const button: HTMLElement | null = document.getElementById("submit");
    const input: HTMLInputElement = document.getElementById('palavra') as HTMLInputElement;
    if (button && input) {
        button.onclick = function () {
            window.alert('Total de Vogais: ' + totalVogais(input.value));
        }
    }
}

let totalVogais = function (palavra: string): number {
    let total: number = 0;
    let vogais: string = "aeiou";
    for (let index: number = 0; index < palavra.length; index++) {
        const letra: string = palavra[index].toLowerCase();
        if (vogais.includes(letra)) {
            total++;
        }
    }
    return total;
}
console.log(totalVogais("Acessibilidade"))
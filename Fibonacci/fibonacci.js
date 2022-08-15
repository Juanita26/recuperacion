do{
    numero = Number(prompt("Ingrese el número de fibonacci que desea obtener el resltado"))
}
while (isNaN(numero)||numero<0||numero>40);

function fibonacci(numero){
    if (numero==1 || numero==0){
        return 1 
    } else {
        return fibonacci(numero-1) + fibonacci(numero-2);
    }
}

let resultado = document.querySelector("#resultado")
resultado.innerHTML = "El número fibonacci de " + numero + " es " + fibonacci(numero)
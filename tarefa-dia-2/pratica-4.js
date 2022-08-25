// Se for internacional, deve exibir o nome do produto e o valor com os impostos de 20%. Se for nacional, deve exibir o nome do produto e o valor com os impostos de 12%.
// minha solução

let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};


if (produtoC ["internacional"]==true) {
    console.log (`O produto ${produtoC ["nome"]} é internacional e possui um valor com impostos de ${produtoC ["valor"]*1.2}.`)
} else {
    console.log (`O produto ${produtoC ["nome"]} é nacional e possui um valor com impostos de ${produtoC ["valor"]*1.12}.`)
}

//solução da aula... bem melhor..rs

//Usamos o condiconal para testar se a chave internacional do mapa produtoA é true ou false.
if (produtoC.internacional == true) {
    //para deixar o código organizado, podemos clarar uma variável que recebe o resultado do calculo de impostos. 
    //Isso deixa o progrmaa mais legível sobre o que está acontecendo.
    let valorImpostos = produtoC.valor * 1.2
    //Podemos adiconar um console.log com uma mensagem que será útil para verificarmos se o programa funcionou corretamente.
    console.log("O produto é internacional")
    console.log(valorImpostos)
} else {
    let valorImpostos = produtoC.valor * 1.12
    console.log("O produto é nacional")
    console.log(valorImpostos)   
}
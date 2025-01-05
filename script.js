// Crie uma lista de produtos

//  1 - A lista de produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html. (OK)
//  2 - Mostre no console quantos produtos tem nessa lista. (OK)
//  3 - Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes. (OK)
//  4 - Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisão que o produto não foi encontrado.
//  5 - Remova o segundo item da sua lista.

let lista = ['Computador', 'Telefone', 'Mouse', 'Teclado'];
let quantidade = lista.length;

console.log(`1 - Os elementos do lista são: ${lista}`);
console.log(`2 - A quantidade de elementos na lista é: ${quantidade}`);

lista.splice(2, 1); 

//utilizando o splice;
/* 
    Primeiro número - serve para escolher quem vamos remover;
    Segundo número - quandidade de elementos que serão removidos; 
    Os números a diante - são responsáveis por adicionar
*/


console.log(`3 - Os elementos do lista, após a remoção, são: ${lista}`);

lista.find((item) =>{
    let itemDaLista = item;
    return 
})
    

localStorage.setItem("@lista", JSON.stringify(lista));
// Crie uma lista de produtos

//  1 - A lista de produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html. (OK)
//  2 - Mostre no console quantos produtos tem nessa lista. (OK)
//  3 - Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes. (OK)
//  4 - Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisando que o produto não foi encontrado.
//  5 - Remova o segundo item da sua lista.

console.log('\n Primeiro Exercício! \n\n');

let lista = ['Computador', 'Telefone', 'Mouse', 'Teclado'];
let quantidade = lista.length;

localStorage.setItem("@lista", JSON.stringify(lista));

console.log(`1 - Os elementos do lista são: ${lista}`);

console.log('==============================');

console.log(`2 - A quantidade de elementos na lista é: ${quantidade}`);

lista.splice(2, 1); 

//utilizando o splice;
/* 
    Primeiro número - serve para escolher quem vamos remover;
    Segundo número - quandidade de elementos que serão removidos; 
    Os números a diante - são responsáveis por adicionar
*/

console.log('==============================');

console.log(`3 - Os elementos do lista, após a remoção, são: ${lista}`);

console.log('==============================');

let resultado = lista.find((item)=>{
    return item == 'Telefone'; 
});

if(resultado != undefined){
    console.log(`4 - ${resultado} existe na lista`);

    console.log('==============================');

    let j = 0;
    
    for(i = 0; i != lista.length; i++){
       
        if(lista[i] == resultado)
        {
            for(i; i != lista.length; i++){
                lista[i] = lista[i + 1];
            }
            console.log(`5 - Os elementos da lista, após a remoção, são: ${lista}`);
            break;
        }
    }

}else{
    console.log(`4 - O produto não foi encontrado`);
}

console.log('\n Segundo Exercício! \n\n');


// Crie uma lista de apenas numeros 1,3,5,7,0,9​

//  Ordene essa lista do menor para o maior.
//  Retire o primeiro numero desta lista.
//  Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]


let list_a = [1, 3, 5, 7 , 0, 9, -1, 10, -20, 5];

console.log(list_a);

let n = list_a.length;

do{
    for(i = 0; i < n; i++){ 
        if(list_a[i] > list_a[i + 1]){
            let aux = list_a[i + 1];
            list_a[i + 1] = list_a[i];
            list_a[i] = aux;
        }
    }
    n--;
}while(n != 0)

console.log(`\n\t ========================================= \n\n ${list_a} - lista enfileirada em ordem crescente! \n\n\t =========================================`);


//para remoção
//início - shift
//fim - pop

//para inserção
//início - push
//fim - unshift

console.log(`\n\nO elemento ${list_a[0]} será removido!`);
list_a.shift();
console.log(list_a);

// trocando a ordem 
console.log('==============================');
let h = list_a.length;

for(i = 0; i < h; i++){
    let h_2 = h - 1;
    aux = list_a[i];
    list_a[i] = list_a[h_2];
    list_a[h_2] = aux;
    h_2--;
}

console.log(`\n\t ========================================= \n\n ${list_a} - lista reordenada! \n\n\t =========================================`);
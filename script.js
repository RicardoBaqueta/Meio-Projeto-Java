window.onload=function(){
    const botao = document.getElementById('ma', 'li', 'to', 'ce', 'pe');
    const produtos = document.querySelector("#produtos");
    const cestaClient  = document.querySelector("#cestaClient");

    botao.addEventListener('click',function(){
        cestaClient.innerHTML += ' '+produtos.value + ' '; 
    })
}


let frutas = [
    {fruta: "Mamão", preco: 3.50},
    {fruta: "Limão", preco: 3.80},
    {fruta: "Tomate", preco: 7.00},
    {fruta: "Cenoura", preco: 2.50},
    {fruta: "Pepino", preco: 1.90},

]

function listaFrutas(f){
 let total=0;
    for( let produto of f){
        for( let p  in produto){
            console.log(` ${p} -> ${produto[p]}` );
            if(produto[p] == produto.preco){
                total+= produto.preco;
           }
                 
        }
    }    
  console.log(total)
}

listaFrutas( frutas );
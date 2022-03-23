//Minha solução de atividade
function comparaPalindrono(){
    let frase = prompt('Digite uma frase:');

    alert(frase);

    let revertFrase = [];

    for(i = frase.length; i >= 0; i--){
        
        revertFrase.push(frase[i]);
    }

  let fraseInversa = revertFrase.join("");

  let fraseSemSpace = frase.replace(/ /g, "");

  let fraseInSemSpace = fraseInversa.replace(/ /g, "");

  if(fraseSemSpace === fraseInSemSpace){
     alert(`${frase} é um palíndrono!`);
  }else{
      alert(`${frase} não é um palíndrono!`)
  }
    
    
}
//Exemplo da DIO
function VerificaPalindromo2(string){
    if(!string) return 'String inexistente!';

    for(let i = 0; i< string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        } 
    }
    return true;
}

comparaPalindrono();

alert(VerificaPalindromo2('ama'));
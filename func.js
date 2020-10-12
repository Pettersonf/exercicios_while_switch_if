function addEvenNumbers (){
    let start = 2;
    let final = 100;
    let count = 0

    while (start <= final){
        if (start % 2 == 0){
            count = start + count;

        }
        start = start + 1;

    }
return "A soma dos numeros pares de 1 a 100 é:" +count;
}

console.log(addEvenNumbers());



function sumOddNumbers (){
    let start = 101;
    let final = 200;
    let count = 0;

    while (start <= final){
        count = start + count;
        start = start + 2;
    }

    return "A soma dos numeros ímpares de 101 a 200 é:" +count;
}

console.log (sumOddNumbers());


function compareTwoNumebers (num1, num2){
    num1 = 3;//teste
    num2 = 10;    //teste
    
    let count = 0;

    while (num1 < num2){
        if (num1 >= 1 && num2 <= 30){
            count = num1 + count;  
         }
                    else {
                        return 0;
                    }
                    
                    num1 = num1 + 1;
            }
            return count;
}

console.log (compareTwoNumebers())

function factorial (num){
let resultado = 1;


            while (num >=1 && num <=10){
                resultado = resultado * num;
                num = num-1;
            }
        
               return resultado;
    
}
console.log (factorial(5)); //teste


function monthOfYear (value){

    let message
    switch (value) {
        
        case 1:
        message = "Janeiro"
        break;

        case 2:
        message = "Fevereiro"
        break;

        case 3:
        message = "Março"
        break;

        case 4:
        message = "Abril"
        break;

        case 5:
        message = "Maio"
        break;
        
        case 6:
        message = "Junho"
        break;

        case 7:
        message = "Julho"
        break;

        case 8:
        message = "Agosto"
        break;

        case 9:
        message = "Setembro"
        break;

        case 10:
        message = "Outubro"
        break;

        case 11:
        message = "Novembro"
        break;

        case 12:
        message = "Dezembro"
        break;

        default:
        message = "Número inválido"  
    }
    return message;
}

console.log (monthOfYear(12));//teste




function codMessage (code){
    
    let message = "";

    switch (code){

        case "xpto":
            message = "Bem vindo convidado"
            break;
        case "alfa15":
            message = "Preparando lançamento"
            break;
        case "tango":
            message = "Foguete lançado"
            break;
        default:
            message = "Código inválido"
    }
    return message;
}

console.log (codMessage("alfa15"));




function ATM (value){

    let message ="";

    switch (value){

        case 1:
            message = "Sacar";
            break;
        case 2:
            message = "Depositar";
            break;
        case 3:
            message = "Verificar saldo";
            break;
        case 4:
            message = "Sair";
            break;
        default:
            message = "Codigo invalido"
    }
        return message;
}

console.log (ATM(2));//teste


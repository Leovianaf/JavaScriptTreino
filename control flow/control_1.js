// Control flow

// if...else

// let temperature = 37.5
// let highTemperature = temperature >= 37.5
// let mediumtemperature = temperature < 37.5 && temperature >= 37

// if(highTemperature){
//     console.log("Está com febre alta")
// }else if(mediumtemperature){
//     console.log("Está com febre moderada")
// } else{
//     console.log("Está saudável")
// }

// switch

// function calculate (number1,operator,number2){
//     let result = 0

//     switch (operator) {
//         case "+":
//             result = number1 + number2
//             break;
//         case "-":
//             result = number1 - number2
//             break
//         case "*":
//             result = number1 * number2   
//             break;
//         case "/":
//             result = number1 / number2 
//             break
//         default:
//             console.log("Impossível realizar operação")
//             break;
//     }
//     return result
// }

// console.log(calculate(4,"/",2))

// throw

// function sayMyName(name = ""){
//     if(name === ""){
//         throw "Nome é obrigatório"
//     }

//     console.log(name)
// }

// // try...catch
// try{
//     sayMyName("Leo")

// } catch(e){
//     console.log(e)
// }

// console.log("Após o Try/Catch")
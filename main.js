function printGreeting(greeting, userName){
    document.write(`${greeting} ${userName}`)
}

//printGreeting()

//Funkcja przyjmująca tekst z promptu

//const Name = prompt("Podaj imię")

//function greetingUsername(Name){
//    document.write(`<p> Hej ${Name}! </p>`)
//}

//greetingUsername(Name)


//Kalkulator gdzie uzytkownik podaje 2 liczby i znak dzialania, wynik wyswietlany na stronie

var num1
var num2
var indicator = prompt("Podaj znak działania: ")
var result

function calc(indicator){
    
    if (indicator == "+"){
        num1 = parseFloat(prompt("Podaj pierwszą liczbę"))
        num2 = parseFloat(prompt("Podaj drugą liczbę"))
        result = num1+num2
        document.write(`Wynik dodawania wynosi: ${result}`)
    }
    else if (indicator == "-"){
        num1 = parseFloat(prompt("Podaj pierwszą liczbę"))
        num2 = parseFloat(prompt("Podaj drugą liczbę"))
        result = num1-num2
        document.write(`Wynik odejmowania wynosi: ${result}`)
    }
    else if (indicator == "*"){
        num1 = parseFloat(prompt("Podaj pierwszą liczbę"))
        num2 = parseFloat(prompt("Podaj drugą liczbę"))
        result = num1*num2
        document.write(`Wynik mnożenia wynosi: ${result}`)
    } 
    else if (indicator == "/"){
        num1 = parseFloat(prompt("Podaj pierwszą liczbę"))
        num2 = parseFloat(prompt("Podaj drugą liczbę"))

        while (num2 == 0){
            num2 = parseFloat(prompt("Podaj drugą liczbę RÓŻNĄ OD ZERA"))
        }
        
        result = num1/num2
        if (num1 == 0){
            result = 0
        }
        document.write(`Wynik dzielenia wynosi: ${result}`)
    }
    else {
        document.write(`Niepoprawne dane`)
    }
}

calc(indicator)
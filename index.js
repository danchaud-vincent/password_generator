const lettersList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbolsList = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-", "+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

// get the elements by id
let nbCharactersInputEl = document.getElementById("nbCharacters-input-el")
let alertMessageEl = document.getElementById("alert-message-el")
let integerCheckboxEl = document.getElementById("integer-checkbox-el")
let symbolsCheckboxEl = document.getElementById("symbols-checkbox-el")
let passwordOneEl = document.getElementById("password-one-el")
let passwordTwoEl = document.getElementById("password-two-el")



// Function Generate
function generate(){
    alertMessageEl.style.visibility = "hidden"
    let passwordOne = ""
    let passwordTwo = ""
    const passwordLength = Number(nbCharactersInputEl.value)
    let charactersList = [lettersList]

    if (passwordLength >= 5 && passwordLength <=16){
        
        if (integerCheckboxEl.checked === true){
            // add numbers into the passwords
            charactersList.push(numbersList)
        }

        if (symbolsCheckboxEl.checked === true){
            // add symbols into the passwords
            charactersList.push(symbolsList)
        }

        for (let i=0; i < passwordLength; i++){

            // random number to choose in which list we get the characters
            randomNumberLists = Math.floor(Math.random() * charactersList.length)
            listSelected = charactersList[randomNumberLists]

            // create two random numbers for both of passwords
            randomNumberOne =  Math.floor(Math.random() * listSelected.length)
            randomNumberTwo =  Math.floor(Math.random() * listSelected.length)

            // generate the passwords
            passwordOne += listSelected[randomNumberOne]
            passwordTwo += listSelected[randomNumberTwo]
        }

        // add the passwords in the div
        passwordOneEl.textContent = passwordOne
        passwordTwoEl.textContent = passwordTwo

    }
    else{
        alertMessageEl.style.visibility = "visible"
    }
}


// Function save
function save(id){

    if (id === "saveOne"){

        if (passwordOneEl.textContent !== ""){
            // show the copy text
            let copyText = document.querySelector(".copy-text-one")
            copyText.style.visibility = "visible"
            setTimeout(function () {
                copyText.style.visibility = "hidden"
            }, 2000);

            // copy the password
            navigator.clipboard.writeText(passwordOneEl.textContent)
        }
        
    }
    else{
        if (passwordTwoEl.textContent !== ""){
            // show the copy text
            let copyText = document.querySelector(".copy-text-two")
            copyText.style.visibility = "visible"

            setTimeout(function () {
                copyText.style.visibility = "hidden"
            }, 2000);

            // copy the password
            navigator.clipboard.writeText(passwordTwoEl.textContent)
        }
    }

}
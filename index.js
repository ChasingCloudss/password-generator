const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let inputEl = document.getElementById("characters-input")
let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")

function generatePassword() {
    document.getElementById("error-display").style.display = "none"
    password1.style.display = "inline"
    password2.style.display = "inline"
    
    password1.textContent = ""
    password2.textContent = ""
    if (inputEl.value > "0") {
        for (let i = 0; i < inputEl.value; i++ ) {
            let result1 = Math.floor(Math.random() * characters.length);
            let result2 = Math.floor(Math.random() * characters.length);
            
            password1.textContent += characters[result1]
            password2.textContent += characters[result2]
    }
    } else if (inputEl.value === "") {
        document.getElementById("error-display").style.display = "block"
    }
    
}

function copyToClipboard1() {
        let text1 = password1.textContent
        
        if (!text1) {
            alert("Copying failed. Generate password first")
        }
        
        navigator.clipboard.writeText(text1)
        .then(() => alert("Text copied successfully"))
        .catch(() => alert("Copy failed"))
}

function copyToClipboard2() {
    let text2 = password2.textContent
    
    if (!text2) {
        alert("Copying failed. Generate password first")
    }
    
    navigator.clipboard.writeText(text2)
    .then(() => alert("Text copied successfully"))
    .catch(() => alert("Copy failed"))
}




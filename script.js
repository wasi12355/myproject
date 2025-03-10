let UpperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let LowerSet="abcdefghijklmnopqrstuvwxyz";
let NumSet="0123456789";
let symbolset="!@#$%^&*()_+";


let upperInput=document.getElementById("upper-case")
let lowerInput=document.getElementById("lower-case")
let numInput=document.getElementById("numbers")
let symbols=document.getElementById("symbols")
let lengthInput=document.getElementById("total-char")
let passBox=document.getElementById("pass-box")

let getRandomData=(dataset)=>{
return dataset[Math.floor(Math.random()*dataset.length)]    
}



let generatePassword=(password="")=>{
    if(upperInput.checked)
    {
        password+=getRandomData(UpperSet)
        console.log(password)
    }
    if(lowerInput.checked)
    {
        password+=getRandomData(LowerSet)

        console.log(password)
    }
    if(numInput.checked)
    {
        password+=getRandomData(NumSet)
        console.log(password)
    }
    if(symbols.checked)
    {
        password+=getRandomData(symbolset)
        console.log(password)
    }        
    if(password.length<lengthInput.value)
    {
        return generatePassword(password)
    }
    passBox.innerText=password
}
    document.getElementById("btn").addEventListener("click",function(){
    generatePassword()

    })
 
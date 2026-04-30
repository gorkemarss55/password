const leftTextArea=document.querySelector("#leftTextArea");
const rightTextArea=document.querySelector("#rightTextArea");
const encodeButton=document.querySelector("#encodeButton");
const decodeButton=document.querySelector("#decodeButton");
const cleanButton=document.querySelector("#cleanButton");

runEventListener();

function runEventListener(){
encodeButton.addEventListener("click", encode);
decodeButton.addEventListener("click",decode);
cleanButton.addEventListener("click", clear);

}

function encode(){
    
    if(leftTextArea.value==""){
        alert("Lütfen şifre giriniz");
        return;
    }
    let password=leftTextArea.value;
   let encodedPassword= btoa(password);
   rightTextArea.value=encodedPassword;
   leftTextArea.value="";
}

function decode(){
 leftTextArea.value= atob(rightTextArea.value);
 rightTextArea.value="";
}

function clear(){
    rightTextArea.value="";
    leftTextArea.value="";
}
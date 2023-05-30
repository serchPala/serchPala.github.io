// script.js

function encrypt() {
    var inputText = document.getElementById("inputText").value;
    var encryptedText = encryptMessage(inputText);
    document.getElementById("outputText").value = encryptedText;
  }
  
  function decrypt() {
    var inputText = document.getElementById("inputText").value;
    var decryptedText = decryptMessage(inputText);
    document.getElementById("outputText").value = decryptedText;
  }
  
  function copyToClipboard() {
    var outputText = document.getElementById("outputText");
    outputText.select();
    outputText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(outputText.value);
  }
  
  function encryptMessage(message) {
    var encryptedMessage = message.replace(/e/g, "enter")
                                  .replace(/i/g, "imes")
                                  .replace(/a/g, "ai")
                                  .replace(/o/g, "ober")
                                  .replace(/u/g, "ufat");
  
    return encryptedMessage;
  }
  
  function decryptMessage(message) {
    var decryptedMessage = message.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u"); //g means global
  
    return decryptedMessage;
  }
  
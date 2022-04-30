const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect=true) {
    this.isDirect = isDirect;
  }
  encrypt(message,key) {
  if(!message || !key) 
      throw new Error("Incorrect arguments!");
        let result = [];
        
        if(key.length<message.length) {
            key = key.repeat(Math.ceil(message.length/key.length));
            key = key.substring(0, message.length);
        }
            key = key.toLowerCase();
            message = message.toLowerCase(); //.replace(/\W/g, '');
            let j =0;
        for(let i=0;i<message.length;i++) {
            if(message[i].toUpperCase() == message[i].toLowerCase()) {
              result.push(message[i]);
            }
            if(message[i].toUpperCase() != message[i].toLowerCase()) {
            let letter = String.fromCharCode((((key.charCodeAt(j) - 97)+(message.charCodeAt(i)-97))%26)+97);
            result.push(letter.toUpperCase());
            j++;
            }
        }
        console.log(key);
        console.log(message);
        return this.isDirect?  result.join(""): result.reverse().join("");
    
  }
  decrypt(message,key) {
      if(!message || !key) 
      throw new Error("Incorrect arguments!");
    
        let result = [];
        
        if(key.length<message.length) {
            key = key.repeat(Math.ceil(message.length/key.length));
            key = key.substring(0, message.length);
        }
        key = key.toLowerCase();
            message = message.toLowerCase()
        let j =0;
      for(let i=0;i<message.length;i++) {
            if(message[i].toUpperCase() == message[i].toLowerCase()) {
              result.push(message[i]);
            }
            if(message[i].toUpperCase() != message[i].toLowerCase()) {
            let letterNumber = (((message.charCodeAt(i)-97)-(key.charCodeAt(j) - 97)));
            if(letterNumber<0) letterNumber=letterNumber+26;
            result.push(String.fromCharCode(letterNumber+97).toUpperCase());
            j++;
            }
        
        }
        return this.isDirect?  result.join(""): result.reverse().join("");
        
          
  }
}

module.exports = {
  VigenereCipheringMachine
};

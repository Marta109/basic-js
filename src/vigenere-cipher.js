const {NotImplementedError} = require("../extensions/index.js");

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

// const matrixVigenere = {};

// function createMatrixVigenere() {
//   let alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
//   for (let i = 0; i < alphabet.length; i++) {
//     if (matrixVigenere[alphabet[i]] === undefined)
//       if (i === 0) {
//         matrixVigenere[alphabet[i]] = alphabet;
//       } else {
//         matrixVigenere[alphabet[i]] =
//           alphabet.slice(i, alphabet.length) + alphabet.slice(0, i);
//       }
//   }
// }

// createMatrixVigenere();

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    message = message.toUpperCase();
    key = key.toUpperCase();

    let messageStr = message.replace(/[^A-Z]/g, "");
    key = this.completeKey(key, messageStr);
    let j = 0;
    let result = "";

    for (let i = 0; i < message.length; i++) {
      if (/[^A-Z]/.test(message[i])) {
        result += message[i];
      } else {
        let indexMess = this.alphabet.indexOf(messageStr[j]);
        let indexKey = this.alphabet.indexOf(key[j]);
        let indexResult = (indexMess + indexKey) % 26;
        result += this.alphabet[indexResult];
        j++;
      }
    }
    return this.isDirect ? result : result.split("").reverse().join("");
  }

  
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let messageStr = encryptedMessage.replace(/[^A-Z]/g, "");
    key = this.completeKey(key, messageStr);
    let j = 0;
    let result = "";

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (/[^A-Z]/.test(encryptedMessage[i])) {
        result += encryptedMessage[i];
      } else {
        let indexMess = this.alphabet.indexOf(messageStr[j]);
        let indexKey = this.alphabet.indexOf(key[j]);
        let indexResult = (indexMess - indexKey) % 26;
        if (indexResult < 0) {
          indexResult = (indexResult + 26) % 26;
        }
        result += this.alphabet[indexResult];
        j++;
      }
    }
    return this.isDirect ? result : result.split("").reverse().join("");
  }

  completeKey(key, message) {
    let j = 0;
    while (key.length < message.length) {
      key += key[j];
      j++;
    }
    return key;
  }
}

module.exports = {
  VigenereCipheringMachine,
};

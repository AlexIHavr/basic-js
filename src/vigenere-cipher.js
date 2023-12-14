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
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  isReverse;

  constructor(type = true) {
    this.isReverse = !type;
  }

  encrypt(str, key, isDecrypt) {
    if (!str || !key) throw new Error('Incorrect arguments!');

    let keyIndex = 0;
    const sign = isDecrypt ? -1 : 1;

    let result = str.split('').map((char) => {
      char = char.toUpperCase();

      const charIndex = this.alphabet.indexOf(char);
      if (charIndex !== -1) {
        if (keyIndex >= key.length) keyIndex = 0; 

        let newIndex = charIndex + this.alphabet.indexOf(key[keyIndex++].toUpperCase()) * sign;

        if ((!isDecrypt && newIndex >= this.alphabet.length) || (isDecrypt && newIndex < 0))
          newIndex -= this.alphabet.length * sign;

        char = this.alphabet[newIndex];
      }

      return char;
    });

    if (this.isReverse) result = result.reverse();

    return result.join('');
  }

  decrypt(str, key) {
    return this.encrypt(str, key, true);
  }
}

module.exports = {
  VigenereCipheringMachine
};

export default function checkPaySystem(number) {
    if(number.startsWith('4') && (number.length === 13 || number.length === 16 || number.length === 19)){
      return 'visa';
   }
    if(number.startsWith('51') || number.startsWith('52') || number.startsWith('53') || number.startsWith('54') || number.startsWith('55') && number.length === 16){
      return 'mastercard';
    }
    if(number.startsWith('34') || number.startsWith('37')){
     return 'ae';
    }
    if(number.startsWith('2200') ||number.startsWith('2201') ||number.startsWith('2202') || number.startsWith('2203') || number.startsWith('2204')){
     return 'mir';
    }
}
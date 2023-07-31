export default function checkValidity(number) {
    if(number === ''){
        return false;
    }
    const arrValue = Array.from(number).reverse().map(Number);
    const arrTrans = arrValue.map((item, index) => {
        if (index % 2 !== 0) {
            const newItem = item * 2;
            if (newItem > 9) {
                return Math.trunc(newItem / 10) + (newItem % 10);
            }
            return newItem;
        }
        return item;
    });
    const sum = arrTrans.reduce((sum, item) => sum + item, 0);
    return (sum % 10 === 0);
}
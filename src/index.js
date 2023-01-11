module.exports = function toReadable (number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	const dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	const fromTenToTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let result;
    if (number / 10 < 1) {
        result = units[number];
        } else if (number === 10) {
        result = dozens[1];
    } else if (number / 20 < 1) {
        result = fromTenToTwenty[number - 10];
    } else if (number / 100 < 1) {
        if (number % 10 == 0) {
            result = dozens[Math.floor(number / 10)];
        } 
        else result = dozens[Math.floor(number / 10)] + ' ' + units[number % 10];
    } else { 
        let num = number.toString();
        if (number % 100 === 0) {
            result = units[num[0]] + ' hundred';
        } else if (number % 100 > 9 && number % 100 < 20) {
            result = units[num[0]] + ' hundred ' + fromTenToTwenty[num[2]];
        } else if (number % 10 === 0) {
            result = units[num[0]] + ' hundred' + ` ${dozens[num[1]]}`;
        } else if (number % 100 < 10) {
            result = units[num[0]] + ' hundred' + ` ${units[num[2]]}`;
        } else {
            result =  units[num[0]] + ' hundred' + ` ${dozens[num[1]]}` + ` ${units[num[2]]}`;
        }
    }
return result;
}



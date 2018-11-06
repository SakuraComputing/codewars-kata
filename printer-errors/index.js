function printer_error(printStr) {

    let printArray = printStr.split('');

    let errorChars = ['n','o','p','q','r','s','t','u','v','w','x','y','z'];

    let errorCount = 0;

    for (const letter of printArray) {
        // if(errorChars.includes(letter)) {
        if(letter.charCodeAt(0) > 109) {
            errorCount++;        
        }
    }

    return errorCount + "/" + printArray.length;
}

console.log(printer_error("aaaxbbbbyyhwawiwjjjwwm"));
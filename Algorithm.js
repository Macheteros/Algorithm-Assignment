function countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    
    return str.split(' ').length;
    }
console.log(countWords("Dji drones are the best in the market")); 
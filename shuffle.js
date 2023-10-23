let cards = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
shuffle(cards);
console.log(cards);
function shuffle(arrays){
    let currIndex = arrays.length;
    while(currIndex != 0){
        let randomIndex = Math.floor(Math.random()*arrays.length);
        currIndex --;
        let temp = arrays[currIndex];
        arrays[currIndex] = arrays[randomIndex];
        arrays[randomIndex] = temp;
    }
    return arrays;
} 
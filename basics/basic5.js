function rollDice(num){
    if (typeof(num)!='number'){return false}
    if (num%1!=0){return false}
    else {return Math.round(Math.random() * num)}}
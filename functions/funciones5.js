const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param){
    let c=0
    for (let n of param){
        if (isNaN(n)){c+=n.length}
        else{c+=parseFloat(n)}}
    return c/mixedElements.length}
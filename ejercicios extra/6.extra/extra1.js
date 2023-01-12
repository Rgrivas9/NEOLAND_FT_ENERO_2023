const splitName=(text)=>{
    const name=text.slice(0,text.indexOf(' '))
    const surname=text.slice((text.indexOf(' ')+1))
    return [name,surname]
}
name=splitName('Peter Parker')[0]
surname=splitName('Peter Parker')[1]
console.log(name,surname)
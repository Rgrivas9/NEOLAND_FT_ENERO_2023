function swap(list,text1,text2,i=-1){
    const i1=list.indexOf(text1),i2=list.indexOf(text2),lis=[],flis=[]
    for (e of list){i++;if (i!=i1 || i!=i2){lis.push(e)}}
    i=-1
    for (e of list){i++
        if (i==i1){flis.push(list[i2])}
        if (i==i1){flis.push(list[i1])}
        else {flis.push(lis[i])}}
    return flis}
//MEJORADO EN ejercicios extra-jediknight-jedik6
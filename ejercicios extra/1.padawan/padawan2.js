const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },];
const removeMeat=(list,lisv=[])=>{for (thing of list){if (thing.isVegan){lisv.push(thing)}}return lisv}
const addFruit=(list1,list2)=>{for (fruit of list2){list1.push({name:fruit,isVegan:true})}return list1}
const fixList=(list1,list2)=>{return addFruit(removeMeat(list1),list2)}

console.log(fixList(foodSchedule,fruits))
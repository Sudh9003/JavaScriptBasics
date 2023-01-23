//Multiply array with a number
var scores=[2,17,5,0037,8,10,12]
/*let newScores=[]
for(let k=0;k<=scores.length-1;k++){
     newScores.push(scores[k]*2)
    }
console.log(newScores)*/
//How to do in one line using Map Function
let mappedArray=scores.map(sc=>sc*3)
console.log(mappedArray)
//sum all the array numbers
//[ 6, 12, 15, 21, 24 ]
let tMappedArray=mappedArray.reduce((sum,val)=>sum+val,0)
console.log(tMappedArray)
//chain all function i.e. filter, map, reduce
let tSumValue=scores.filter(sc=>sc%2==0).map(sc=>sc*5).reduce((sum,val)=>sum+val,0)
console.log(tSumValue)
//sorting of Array
let fruits=['banana','apple','guava','pineapple','papaya']
console.log(fruits.sort())
console.log(fruits.reverse())
console.log(scores.sort())//for int arar it won't work, it works only for string array
console.log(scores.sort((a,b)=>a-b))//sorted in ascending order
console.log(scores.sort((a,b)=>b-a))//reverse
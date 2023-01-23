
var marks=new Array(1,2,3,4,5,6,7,8,9)//way to declare array by using new kwyword
for(let a=0;a<=marks.length;a++){
    console.log(marks[a])
}
var marks=[12,23,45,67,88] //array with directly assigning the value
console.log(marks[1])  //by indexing
console.log(marks.length)
marks.push(12,13,24)
console.log(marks)
console.log(marks.length)
marks.pop()//it will delete from end
marks.unshift(10)//To add at the begining
marks.includes(100)
var ma=marks.slice(1,4)
console.log(ma)
for(var a=1;a<=marks.length;a++){
    console.log(marks[a])
}

//Create new array with only even numbers 
var scores=[10,12,13,14,15,17]
var evenScores=[]
for(let i=0;i<=scores.length;i++){
      if(scores[i]%2==0){
        evenScores.push(scores[i])
      }
}
console.log(evenScores)
//Same operation in one line/////////
var score=[11,12,13,14,45,56]
var newScore=score.filter(sc=>sc%2==0)
console.log(newScore)






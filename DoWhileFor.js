let i=0
do{
    i++
    console.log(i)
}while(i<5);
//////////////////////////////////
console.log("To get the common multiple of 2 and 5")
let count =0
for(let k=1;k<=50;k++){
    if(k%2==0 && k%5==0){
        count++
        console.log(k)
        if(count==2){
            break
        }
    }
}


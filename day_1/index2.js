console.log('Hello World');
var x=10
var y='안녕하세요'
console.log('x의값은'+x)
console.log('y의값은'+y)
var num=10
var num2=20
var result=num+num2
console.log(result)
if(result==30){
    console.log('30입니다')
}


for(var i=0; i<10; ++i){
    if(i%2 == 0){
        console.log(i+'짝수입니다')
    }
}
var count=0
for(var i=0; i<10; ++i){
    if(i%2 == 0){
       ++count
    }
}
console.log(count)



var array = [5,5,5,5];
var len= array.length
var sum = 0
var avg = 0
for(var i=0; i<len; ++i){
    sum=sum+array[i];
}
avg = sum/len
console.log(avg)
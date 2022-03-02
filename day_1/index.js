var information = {
    "name" : "Lee Sang Hyeop",
    "age" : 26,
    "adress" : "대전",
    "ismarri" : false
};
//json은 key와 value로 구성 
//주의점
// 1. key는 중복 불가능 value는 중복 가능
// 2. value에 정수형, 문자형, boolean형, 배열형(array), null
// 3. 중괄호로 감싼다
// java에서는 json을 map이라고 함
console.log(information);
console.log(information.age);
if(information.age>30){
    console.log('30대')
}
else{
    console.log('아님')
}

// 상수
const PI = 3.14
console.log(PI)
var array = [1,3,4,5,10];
var len = array.length
const EVEN=2
for(var i=0; i<len; ++i){
    var value = array[i];
    if((value%EVEN)==0){
        console.log(value)
    }
}

var array = [1,3,4,5,10];
var len = array.length
var max = 0
for(var i=0; i<len; ++i){
    if(max < array[i]){
        max = array[i];
    }
}
console.log(max);

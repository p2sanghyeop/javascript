var name = "홍길동"
var age = 23;
//json
var information = {
    name : '홍길동',
    age : 23
} ;

console.log(information.age);


var dwAcademy = {
    students : ['오승택', '류근환', '강인석', '김보겸','이인서','나정수','정지유','이규성','양다은',
'김민영','유영준','홍준호','이승섭','이정배','이상협'],
    students_count : 15,
    teacher : '현상원',
    today : '2022-03-08',
    subject : ['SQL', 'JAVA', 'HTML']
};
console.log(information.students)
console.log(dwAcademy.students_count);
console.log(dwAcademy)
//students_count가 15이하면 학생수 부족
//students_count가 15초과면 학생수 정상
var count = dwAcademy.students_count;
if(count <=15){
    console.log('학생수 부족');
}
if(count >15){
    console.log('학생수 충분');
}
//이씨찾기
var cnt=0;
var searchWord = '이';
for(var i=0; i<dwAcademy.students.length; ++i){
    var firstName = dwAcademy.students[i].substring(0,1);
    if(firstName == searchWord){
        ++cnt;
    }
}
console.log('이씨는 총=>'+cnt);

var 영화 = {
    배급사 : 'CJ',
    영화이름 : [{
        name : '스파이더맨',
        actor : ['톰홀랜드', '젠데이아'],
        time : 148
    },
   {
        name : '인터스텔라',
        actor : ['앤해서웨이', '매슈매커너히'],
        time : 169
    }
]
}
console.log(영화.영화이름)

var 사원 = {
    사원이름 : 'SMITH',
    사원ID : 3450,
    급여 : 3400,
    부서 : ['개발팀', '영업팀'],
    입사날짜 : "21-12-31",
    상사 : ['BRIAN','KING']
}
var 사원 = {
    사원이름 : 'SMITH',
    사원ID : 3450,
    급여 : 3400,
    부서 : [{
        name : '개발팀',
        count : 5
    }, '영업팀'],
    입사날짜 : "21-12-31",
    상사 : ['BRIAN','KING']
}
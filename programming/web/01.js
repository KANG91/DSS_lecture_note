console.log(1) ;
console.log("a", "b") ;

//식별자
// 상수명 : snake case(대문자)
// 변수명 : camel case
//var TOTAL_COUNT = 50;
//var firstName = "Doojin",
      lastName = "Park";

      console.log(1 == 1) ;
      console.log(1 == '1') ;
      console.log(1 === '1') ; //data type까지 비교함
      // java에서는 비교할 떄 왠만하면 무조건 3개로 써야함.


      // 값을 비교
    console.log(1!=1);
    console.log(1!='1');
    // 데이터 타입까지 비교
    console.log(1!==1);
    console.log(1!=='1');
    console.log(1>2);
    console.log(1<2) ;
    console.log(1>=1);
    console.log(1<=2);

    // NaN 은 비교연산으로 사용되지 않는다. 비교연산에서 어느 한쪽
    console.log(NaN === NaN) ;


    // 할당 연산자
    var a = 1;
    a += 2;
    console.log(a) ;
    a -= 1;
    console.log(a) ;
    a *= 6;
    console.log(a);
    a /= 2;
    console.log(a);




    // 논리 연산자

    // && : 모두 참일 때 참 (and)
    console.log(true && true) ;
    console.log(true && false) ;
    console.log(false && false) ;

    // || : 하나라도 참이면 참 (or)
    console.log(true || true) ;
    console.log(true || false) ;
    console.log(false || false) ;




    //조건문
    if(true){
      console.log("heelo javascirpt");
    }

    if(false){
      console.log("hello javascript");
    } else {
      console.log("hello datascience");
    }

    if(false){
      console.log("hello javascript");
    } else if(true) {
      console.log("hello html");
    } else {
      console.log("hello datascience");
    }

    //false 로 간주되는 데이터 형
    if(null || undefined || NaN || 0 || ""){
      console.log("hello false");
    }

    // true로 간주되는 데이터 형
    if([] && {}){
      console.log("hello true");
    }

    // 문제 1. 점수를 입력하면 학점이 나오는 코드를 작성하십시오.


      // 함수를 변수로 받아서 넣을 수 있다.
      function add(a, b) {
        return a + b;
      }
      var result  = add(3,5);
      console.log(result);

      //함수를 변수로 받아서 넣을 수 있다.
       var add  = function(a, b){
         return a + b;
       };




 // while
 var a  = 0 ;
 while(a < 5) {
   a++;
   console.log(a);
 }
// for
for(var i = 0; i <3; i ++) {
  console.log(i);
}

break
var a = 0 ;
  while(a > 5){
    a++;
    if( a === 3){
      break;
    }
    console.log(a)
  }

  //continue
  var a = 0;
  while(a < 5){
    a++;
    if(a === 3){
      continue;
    }
    console.log(a);
  }

  // 문제 1. 구구단 가로(for,while)
for(var num1 = 2 ; num1 < 10; num1++){
  for (var num2 = 1; num2 <10; num2++){
    console.log(num1 + "*" + num2 + "=" + num1 * num2)
  }
  console.log();
}

  // 문제 2. 구구단 세로 (for, while)
  for(var num2 = 2 ; num1 < 10; num2++){
    for (var num1 = 1; num2 <10; num1++){
      process.stdout.write(num1 + "*" + num2 + "=" + num1 * num2+"\t");
    }
    console.log();
  }

  // 줄바꿈 안되게 출력 process.stdout.write()


  var arr = ['a', 'b', 'c', 'd', 'e'];
  //특정 위치 데이터 가져오기
  console.log(arr[2]);

  // 배열의 크기(length)
  console.log(arr.length);

  //배열 추가
  arr.push('f');
  console.log(arr)
  arr.pop();
  console.log(arr, result);

  //정렬
  arr.reverse() ;
  console.log(arr);
  arr.sort();
  console.log(arr);


  //배열 자르기
  arr.splice(2, 1) ; //2번에서 1개 자름
  consle.log(arr, arr.length);
  delete arr[2]; // 2번이 삭제 하지만 데이터만 삭제, 공간은 남dkdlTDma
  console.log(arr, arr.lenght);

  //배열 데이터 하나씩 사용하기
  // for(var i = 0; i < arr.length; i++){
  //   console.log(arr[i])
  // }

  // 객체 생성

var obj = {};
obj.math = 92;
obj.english = 97;
obj.science = 85;
console.log(obj);
console.log(obj.english);

//객체 출력
for(var key in obj){
  console.log(key, obj[key]);
}
obj.english
obj["english"]

for(var key in obj){
  console.log(key, obj[key]);
}

//객체에 함수 담기
// Object.keys : 객체의 키값 리스트로 가져오기
var points = {
  'points' : {'math': 91,'science': 98, 'english' : 86}
  'total' : function(){
    var total = 0;
    for(var key in this.points){
      total += this.points[key];
    }
    return total
  },
  'avg' : function(){
    return this.total() / Object.keys(this.points).
  }
};

console.log(points.total());

//  스코프
var a = 'hello' ;
function func() {
  var a = 'jajvascript';
  console.log('inner', a)
}
func();
console.log('outer', a);


//익명함수 : 모든 코드르 익명함수 안에서 처리한다.
(function(){
  var a= = 'hello';
  console.log(a);
}

//call background
//함수내에서 모든 동작이 끝나고 실행시키는 함수를 파라미터로 넘겨서 사용하는 방법
// 웹에서 비동기 통신을 할 떄 많이 사용됨.
function add(a, b, callback){
  var result = a + b;
  callback(result);
}

function disp(data){
  console.log(data);
}

add(5, 8, disp)

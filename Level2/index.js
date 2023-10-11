var money = 60000;
var 미래예금액 = 0;

//여기에 코드짜보십시오
if (money >= 50000) {
  var 미래예금액 = money * 1.2 ** 2;
} else if (money < 50000) {
  var 미래예금액 = money * 1.15 ** 2;
}

console.log(미래예금액);

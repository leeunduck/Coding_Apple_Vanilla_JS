//문제 1번
let attendance = ["흥민", "영희", "철수", "재석"];

function searchName(name) {
  for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] == name) {
      console.log("있어요");
    } else {
      console.log("");
    }
  }
}

searchName("철수");
searchName("명수");

// 문제 2번
for (let k = 2; k < 10; k++) {
  for (let i = 1; i < 10; i++) {
    console.log(k * i);
  }
}

//문제 3번
function averageCal(arr, ave) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i] / arr.length;
  }
  if (result < ave) {
    console.log(`평균보다 ${ave - result}점이 올랐네요`);
  } else {
    console.log(`평균보다 ${result - ave}점이 떨어졌네요 재수추천`);
  }
}

averageCal([10, 20, 30, 40, 50], 40);
averageCal([40, 40, 40], 20);

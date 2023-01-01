let users = [
  { userno: "100", email: "aa@b.com", username: "김기자", point: 250 },
  { userno: "101", email: "bb.yedam.ac", username: "이순신", point: 150 },
  { userno: "102", email: "cc.naver.com", username: "을지문덕", point: 100 },
];

function Users() {
  list.innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    let newnode = `
    <tr>
      <td>${users[i].userno}</td>
      <td>${users[i].email}</td>
      <td>${users[i].username}</td>
      <td class="point">${users[i].point}</td>
      <td><button>삭제</button></td>
    </tr>
    `;
    list.innerHTML += newnode;
  }
}
Users();

//문제 2-1)추가버튼 클릭하면 입력값을 배열에 추가하기
btnAdd.addEventListener("click", (ev) => {
  let addValue = {
    userno: userno.value,
    email: email.value,
    username: username.value,
    point: point.value,
  };

  if (!inputCheck()) {
    return;
  }

  users.push(addValue);
  pointTotal();
  Users();
  clear();
});

//문제 3-2) 포인트 계산버튼을 클릭하면 계산결과를 출력하는 이벤트를 연결하세요
btnSum.addEventListener("click", () => {
  totalPoint.innerHTML = "";
  let toTal = 0;
  for (let i = 0; i < users.length; i++) {
    toTal += parseInt(users[i].point);
  }
  totalPoint.innerHTML += toTal;
});

//문제 2-2)추가버튼 클릭 후 입력 필드의 입력값 클리어하기
function clear() {
  userno.value = "";
  email.value = "";
  username.value = "";
  point.value = "";
}

//문제 2-3)도서번호와 이메일을 입력하지 않았으면 경고창 띄우기
function inputCheck() {
  if (userno.value == "") {
    alert("도서번호를 입력하세요");
    return false;
  }
  if (email.value == "") {
    alert("이메일을 입력하세요");
    return false;
  }
  return true;
}

//포인트 총 금액 계산
function pointTotal() {
  let total = 0;
  for (let i = 0; i < users.length; i++) {
    total += parseInt(users[i].point);
  }
  totalPoint.innerText += total;
}

//문제 4-1) 삭제버튼을 클릭하면 해당행을 삭제
//문제 4-2) 삭제된 사용자 정보는 배열에서도 삭제되도록 하기
list.addEventListener("click", (ev) => {
  if (ev.target.nodeName == "BUTTON") {
    let inputDel = ev.target.closest("tr").children[0].innerHTML;
    for (let i = 0; i < users.length; i++) {
      if (users[i].userno == inputDel) {
        users.splice(i, 1);
      }
    }
    Users();
    total();
  }
});

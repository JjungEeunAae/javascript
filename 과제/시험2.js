let goods = [
  { no: "1", title: "스프링", price: 40000, desc: "스프링이 뭐에요" },
  { no: "2", title: "자바", price: 25000, desc: "자바는 또 뭘까요" },
  { no: "3", title: "SQL", price: 32000, desc: "SQL은 알아요" },
];

//배열만큼 등록
addGoods();

function addGoods() {
  list.innerHTML = "";
  for (let i = 0; i < goods.length; i++) {
    list.innerHTML += `
    <div class="card" data-no="${goods[i].no}">
    <img
      src="/3일차/img/강아지3.jpg"
      alt="Denim Jeans"
      style="width: 100%"
    />
    <h1>${goods[i].title}</h1>
    <p class="price">${goods[i].price}</p>
    <p>${goods[i].desc}</p>
    <p><button class="cart">Add to Cart</button></p>
    <p><button class="del">delete Cart</button></p>
  </div>
    `;
  }
}

//장바구니
list.addEventListener("click", function (ev) {
  //btn은 list의 이벤트 타겟
  let btn = ev.target;
  //이벤트 발생하는 노드네임이 버튼일 경우,
  if (btn.classList.contains("cart")) {
    //조상의 제일 가까운 클래스 중에 가격 값이 있는 클래스를 변수에 텍스트로 선언한다.
    let price = btn.closest(".card").querySelector(".price").innerHTML;
    console.log("금액은", price, "원");
  } else if (btn.classList.contains("del")) {
    //삭제
    let no = btn.closest(".card").getAttribute("data-no");
    for (let i = 0; i < goods.length; i++) {
      if (goods[i].no == no) {
        goods.splice(no, 1);
        break;
      }
    }
    btn.closest(".card").remove();
  }
});

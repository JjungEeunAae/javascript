/** @format */

let goods = [
    { no: "1", title: "스프링", price: 40000, desc: "스프링이 뭐에요" },
    { no: "2", title: "자바", price: 25000, desc: "자바는 또 뭘까요" },
    { no: "3", title: "SQL", price: 32000, desc: "SQL은 알아요" },
];

//배열만큼 등록
addGoods();
let totalPrice = 0;

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
    if (btn.classList.contains("cart")) {
        let price = Number(btn.closest(".card").querySelector(".price").innerHTML);
        totalPrice += price;
        cart.innerHTML = `${totalPrice}원`;
        alert("장바구니에 추가되었습니다");
    } else if (btn.classList.contains("del")) {
        if (cart.innerHTML == 0 || cart.innerHTML < 0) {
            alert("장바구니가 비어져있습니다");
            cart.innerHTML = "";
            return;
        }
        let no = btn.closest(".card").getAttribute("data-no");
        for (let i = 0; i < goods.length; i++) {
            let price = Number(btn.closest(".card").querySelector(".price").innerHTML);
            if (goods[i].no == no) {
                totalPrice -= price;
                cart.innerHTML = `${totalPrice}원`;
                goods.splice(no, 1);
                console.log(goods.splice);
                alert("장바구니에서 삭제되었습니다");
            }
        }
    }
});

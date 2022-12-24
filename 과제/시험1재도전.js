let books=[
  {no : 'inbn0002', title : '스프링',
  writer:'김기자',price:40000},
  {no : 'inbn0003', title : '자바',
  writer:'이순신',price:25000},
  {no : 'inbn0004', title : 'SQL',
  writer:'을지문덕',price:32000}
] 

//문제1 3) 테이블에 추가하는 코드를 함수로 구현하세요.
function bookArry(){
  //문제1 2) 테이블의 원래 내용은 삭제하고 추가되도록 하세요.
  list.innerHTML = '';
  //문제1 1) books 배열대로 테이블 추가
  for(let i = 0; i < books.length ; i++){
    list.innerHTML += `
    <tr>
    <td><input type="checkbox"></td>
    <td>${books[i].no}</td>
    <td>${books[i].title}</td>
    <td>${books[i].writer}</td>
    <td class="price">${books[i].price}</td>
    <td><button>삭제</button></td>
    </tr>`
  }
} bookArry(); //함수호출


//문제1 4) 삭제 버튼을 클릭하면 해당 행을 삭제하도록 이벤트를 지정하세요. 
list.addEventListener("click",function(ev){
  if(ev.target.nodeName == "BUTTON"){
    //삭제할 행을 지정해주기
    let no = ev.target.closest("tr").children[1].innerText;
    //
    for(let i = 0 ; i < books.length ; i++){
      if(books[i].no == no){
        books.splice(i,1);
      }
    }
  }
  //삭제를 실행하고 document에 보여줌
  bookArry();
  priceTotal();
})

/*문제2 1) 추가 버튼에 이벤트를 지정하여
클릭하면 입력값을 books 배열에 추가하고 = push
추가 후에는 입력필드의 입력값을 클리어해주세요 */
let plus = document.getElementsByClassName("btn btn-primary col-sm-2")[0];
plus.addEventListener("click",function(){
  let obj = {no:no.value,
    title:title.valuem,
    writer:writer.value,
    price:parseInt(price.value)};
    
    //도서번호와 도서명이 입력되지 않았을 때 밑쪽에 내용 등록되지 않고 바로 리턴
    if(!Alert()){
      return;
    };

  books.push(obj);

  //문제2 4) 1번 문제에서 선언한 함수를 호출하여 테이블에 추가하도록 하세요.
  priceTotal();
  bookArry();
  del();
})

function del(){
  no.value ='';
  title.value ='';
  writer.value ='';
  price.value ='';
}

//문제2 3) 도서번호와 도서명이 입력되지 않았으면 입력하도록 경고창을 띄우세요.
function Alert(){
  if(no.value == ''){
    alert("도서번호를 입력해주세요");
    return false;
  }
  if(title.value == ''){
    alert("도서명을 입력하세요");
    return false;
  }
  return true;
}

//문제3 1) 가격 총금액을 계산하는 함수를 선언하세요
function priceTotal(){
  let a = 0;
  for(let i = 0 ; i < books.length ; i++){
    a += books[i].price;
  }
  totalPrice.innerText = a;
} priceTotal();



/*문제3 2) 추가 버튼을 클릭하고 삭제버튼을 클릭할 때마다
가격계산함수를 호출하여 총가격을 재계산하도록 해주세요*/
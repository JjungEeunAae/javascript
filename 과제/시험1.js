let books=[
  {no : 'inbn0002', title : '스프링',
  writer:'김기자',price:40000},
  {no : 'inbn0003', title : '자바',
  writer:'이순신',price:25000},
  {no : 'inbn0004', title : 'SQL',
  writer:'을지문덕',price:32000}
] 

//배열의 데이터로 태그 그리기
Atype();
//금액 총계산
priceTotal();


//문제1 3) 테이블에 추가하는 코드를 함수로 구현하세요.
function Atype(){
  //문제1 2) 테이블의 원래 내용은 삭제하고 추가되도록 하세요.
  list.innerHTML = '';
  //문제1 1) books 배열대로 테이블 추가
  for(let i = 0 ; i < books.length ; i++){
    let newNode = `
    <tr>
    <td><input type="checkbox"></td>
    <td>${books[i].no}</td>
    <td>${books[i].title}</td>
    <td>${books[i].writer}</td>
    <td class="price">${books[i].price}</td>
    <td><button>삭제</button></td>
    </tr>`
    list.innerHTML += newNode;
  }
}

//문제1 4) 삭제 버튼을 클릭하면 해당 행을 삭제하도록 이벤트를 지정하세요. 
//삭제버튼 클릭하면 tr전체 삭제
list.addEventListener("click",function(ev){
  if(ev.target.nodeName == "BUTTON"){
    //배열에서 삭제
    let no = ev.target.closest("tr").children[1].innerText;
    for(let i = 0 ; i < books.length ; i++){
      if(books[i].no == no){
        books.splice(i,1);
      }
    }
    
    //태그그리기
  Atype();

    /*문제3 2) 추가 버튼을 클릭하고 삭제버튼을 클릭할 때마다
    가격계산함수를 호출하여 총가격을 재계산하도록 해주세요*/
    //금액계산
  priceTotal();
  }
})

/*문제2 2) 추가 버튼에 이벤트를 지정하여
클릭하면 입력값을 books 배열에 추가하고
추가 후에는 입력필드의 입력값을 클리어해주세요 */

//추가버튼 클릭하면 밑부분에 있는 표에 추가
btnAdd.addEventListener("click",function(ev){
  let addobj = {no:no.value,
                title:title.value,
                writer:writer.value,
                price:price.value};
                
  

    //입력값 체크
    if( ! inputCheck()){
      return;
    }
    //배열에 추가
    books.push(addobj);

    /*문제3 2) 추가 버튼을 클릭하고 삭제버튼을 클릭할 때마다
    가격계산함수를 호출하여 총가격을 재계산하도록 해주세요*/
    //금액계산
    priceTotal();
    //배열의 내용을 태그로 그리고

    //문제2 4) 1번 문제에서 선언한 함수를 호출하여 테이블에 추가하도록 하세요.
    Atype();

    //inpet value 값 초기화
    inputClear();
  })
  
  function inputClear(){
    no.value = '';
    title.value = '';
    writer.value = '';
    price.value = '';
  }
  //문제3 1) 가격 총금액을 계산하는 함수를 선언하세요
  function priceTotal(){
    let total = 0;
    for(let i = 0 ; i < books.length ; i++){
      total += books[i].price;
    }
    totalPrice.innerHTML = total;
    console.log(totalPrice.innerHTML);
  }
  
  //문제2 3) 도서번호와 도서명이 입력되지 않았으면 입력하도록 경고창을 띄우세요.
  function inputCheck(){
    if(no.value == ""){
      alert("도서번호");
      no.focus();
      return false;
    }
    if(title.value == ""){
      alert("도서명 등록");
        title.focus();
        return false;
      }
      return true;
    }


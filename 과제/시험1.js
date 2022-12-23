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

function Atype(){
  list.innerHTML = '';
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
    //금액계산
    priceTotal();
  }
});

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
    //금액계산
    priceTotal();
    //배열의 내용을 태그로 그리고
    Atype();
    //inpet value 값 초기화
    inputClear();
  })
    
    //총금액 계산
    function priceTotal(){
      let total = 0;
      for(let i = 0 ; i < books.length ; i++){
        total += books[i].price;
      }
      totalPrice.innerHTML = total;
    }
    
  //도서번호와 도서명을 입력하지 않으면 알림창 띄우기
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

    function inputClear(){
    no.value = '';
    title.value = '';
    writer.value = '';
    price.value = '';
    }

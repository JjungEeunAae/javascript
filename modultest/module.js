/*module.js*/
function module(msg) {
  console.log("msg:" + msg);
} //export default는 단 하나에만 가능
function area(a, b) {
  console.log("area:" + a * b);
}

/*각 함수 앞에 export 적거나,
맨 밑에 {object}로 묶어서 함수명 전부 기재해도 됨*/
export { module, area };

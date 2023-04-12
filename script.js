var container=document.createElement("div");
container.setAttribute("class","container");
document.body.append(container);
var pad=document.createElement("div");
pad.setAttribute("class","pad");
var span=document.createElement("span");
span.setAttribute("class","text-right");
span.setAttribute("id","span");
var p=document.createElement("p");
span.append(p);
pad.append(span);
var b1=document.createElement("br");
pad.append(b1);
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","input");
input.setAttribute("class","text-right form-control");
pad.append(input);
var b2=document.createElement("br");
pad.append(b2);
var b2=document.createElement("br");
pad.append(b2);
var but1=button("button","type","button","value","7","id","seven","class","bg-dark text-light","7");
pad.append(but1);
var but2=button("button","type","button","value","8","id","eight","class","bg-dark text-light","8");
pad.append(but2);
var but3=button("button","type","button","value","9","id","nine","class","bg-dark text-light","9");
pad.append(but3);
var but4=button("button","type","button","value","+","id","add","class","bg-warning text-dark","+");
pad.append(but4);
var b3=document.createElement("br");
pad.append(b3);
var but5=button("button","type","button","value","4","id","four","class","bg-dark text-light","4");
pad.append(but5);
var but6=button("button","type","button","value","5","id","five","class","bg-dark text-light","5");
pad.append(but6);
var but7=button("button","type","button","value","6","id","six","class","bg-dark text-light","6");
pad.append(but7);
var but8=button("button","type","button","value","-","id","sub","class","bg-warning text-dark","-");
pad.append(but8);
var b4=document.createElement("br");
pad.append(b4);
var but9=button("button","type","button","value","1","id","one","class","bg-dark text-light","1");
pad.append(but9);
var but10=button("button","type","button","value","2","id","two","class","bg-dark text-light","2");
pad.append(but10);
var but11=button("button","type","button","value","3","id","three","class","bg-dark text-light","3");
pad.append(but11);
var but12=button("button","type","button","value","*","id","mul","class","bg-warning text-dark","x");
pad.append(but12);
var b5=document.createElement("br");
pad.append(b5);
var but13=button("button","type","button","value"," ","id","clear","class","bg-danger text-light","C");
pad.append(but13);
var but14=button("button","type","button","value","0","id","zero","class","bg-dark text-light","0");
pad.append(but14);
var but15=document.createElement("button");
but15.setAttribute("type","button");
but15.setAttribute("id","equal");
but15.setAttribute("class","bg-success text-light");
but15.innerHTML="=";
pad.append(but15);
var but16=button("button","type","button","value","/","id","div","class","bg-warning text-dark","/");
pad.append(but16);
container.append(pad);
document.body.append(container);


function button(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3,content){
  var ele=document.createElement(tagname);
  ele.setAttribute(attrname,attrvalue);
  ele.setAttribute(attrname1,attrvalue1);
  ele.setAttribute(attrname2,attrvalue2);
  ele.setAttribute(attrname3,attrvalue3);
  ele.innerHTML=content;
  return ele;
}


// //////////////selector

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zer0 = document.getElementById("zero");
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let div = document.getElementById("div");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");

let pad1 = document.querySelector(".pad");

pad.addEventListener("click",display);
clear.addEventListener("click",clearHistory);
equal.addEventListener("click",result);

let input1 = document.querySelector(".pad")
let finalResult = document.querySelector("#input")
result.finalResult = ""

document.body.addEventListener("keypress",keypress)

////////////function


function display(event){
  let span = document.querySelector("#span")
  if(event.target.value === undefined){
    span.innerHTML = span.innerHTML+""
  }
  else{
    span.innerHTML=span.innerHTML+event.target.value;
  }
}

function clearHistory(){
  let span = document.querySelector("#span");
  let finalResult = document.querySelector("#input");
  span.innerHTML="";
  finalResult.value="";
}

function result(){
  let span = document.querySelector("#span"); 
  let finalResult = document.querySelector("#input")
  finalResult.value = eval(span.innerText); 
}


function calculation(num1,operator,num2){
  if(operator === "+"){
      return[num1+num2]
  }else if(operator === "-"){
      return num1-num2    
  }else if(operator === "*"){
      return num1*num2
  }else if(operator === "/"){
      return num1/num2
  }
}

function keypress(e){
  let span=document.querySelector("#span");
  if((e.key<10 && e.key>=0) || e.key==="*" || e.key==="-" || e.key==="+" || e.key==="/" ){
    span.innerText += e.key
}else if(e.key==="Enter"){
    result()
}
else{
  alert("Enter a valid number")
  e.preventDefault();
  return false;
}
}


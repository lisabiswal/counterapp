let m=document.getElementById("num")
let m1=document.getElementById("num1")
let count=0
function countel(){
    count+=1
    m.innerText=count
}
function saveel(){
    let c=count+ "-"
    m1.innerText+=c
    m.innerText=0
    count=0
}

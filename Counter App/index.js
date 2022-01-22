let countPass=document.getElementById("count-pass")
let saver=document.getElementById("pass-save")

let count=0

function inc(){
    count+=1
    countPass.textContent=count
}

function save(){
    let countstr=count+"-"
    saver.textContent+=countstr
    countPass.textContent=0
    count=0
}
function insert(number) {
    document.mainForm.textForm.value = document.mainForm.textForm.value + number;
}
function equal(){
    let equality= document.mainForm.textForm.value;
    if(equality) document.mainForm.textForm.value = eval(equality);
}
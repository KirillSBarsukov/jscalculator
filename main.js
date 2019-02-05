function insert(number) {
    //document.mainForm.textForm.value = document.mainForm.textForm.value + number;
    document.getElementById("id").value = document.getElementById("id").value + number;
    
}

function insertNew(number) {
    document.getElementById("id").value = document.getElementById("id").value + number;
    if (document.getElementById("id").value == '//') {
        document.getElementById("id").value == "/";
    }
}

function equal(){
    let equality= document.getElementById("id").value;
    if(equality) document.getElementById("id").value = eval(equality);
}
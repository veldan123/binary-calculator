

function btd(){
    var inputValue = document.getElementById("i").value;
    var answer = parseInt(inputValue, 2)
    document.getElementById("ans").innerHTML= answer
}
function dtb(){
    var inp = Number(document.getElementById("i").value);
    var answer = inp.toString(2)
    document.getElementById("ans").innerHTML=answer
}

//  parseInt(val, 2) 
//when its 2 - binary to decimal

//dec to bin
//num.toString(2)
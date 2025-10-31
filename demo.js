function abc(){
    let z = document.getElementById("member").value;
    let s = document.getElementById("price").value;
    let m;

    m=(z=="yes") ? s = s -(s*0.20) : s ;

    document.getElementById("result").innerHTML=m;
}
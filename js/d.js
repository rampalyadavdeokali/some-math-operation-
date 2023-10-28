function check(){
    var a=parseInt(document.getElementById("number").value);

    if(a%2==0)
    {
        document.getElementById("well").innerHTML="Even Number";
    }
    else{
        document.getElementById("well").innerHTML="Odd Number";
    }
}

function dechek()
{
    var f=parseInt(document.getElementById("i").value);
    var ff=parseInt(document.getElementById("o").value);

    var e=f+ff;
    document.getElementById("p").innerHTML=e;

}

function Sechek(){


    
    var f=parseInt(document.getElementById("ii").value);
    var ff=parseInt(document.getElementById("oo").value);

    var e=f-ff;
    document.getElementById("pp").innerHTML=e;

}

function Fechek(){


    
    var f=parseInt(document.getElementById("iii").value);
    var ff=parseInt(document.getElementById("ooo").value);

    var e=f/ff;
    document.getElementById("ppp").innerHTML=e;

}
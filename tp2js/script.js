/* BILGER-BAVEREL Axel */

function Calcul() {
    var prix1 = document.getElementById("prix1").value;
    var quantité1 = document.getElementById("quantité1").value;
    var prix2 = document.getElementById("prix2").value;
    var quantité2 = document.getElementById("quantité2").value;
    var prix3 = document.getElementById("prix3").value;
    var quantité3 = document.getElementById("quantité3").value;

    var res1 = prix1 * quantité1;
    var res2 = prix2 * quantité2;
    var res3 = prix3 * quantité3;

    document.getElementById("result1").value = res1; 
    document.getElementById("result2").value = res2;    
    document.getElementById("result3").value = res3;       


    var total = res1 + res2 + res3;
    document.getElementById("totalResult").value = total
}


function reset() {
    document.getElementById("article1").value = "";
    document.getElementById("prix1").value = "";
    document.getElementById("quantité1").value = "";
    document.getElementById("result1").value = "";

    document.getElementById("article2").value = "";
    document.getElementById("prix2").value = "";
    document.getElementById("quantité2").value = "";
    document.getElementById("result2").value = "";

    document.getElementById("article3").value = "";
    document.getElementById("prix3").value = "";
    document.getElementById("quantité3").value = "";
    document.getElementById("result3").value = "";

    document.getElementById("totalResult").value = "";
}

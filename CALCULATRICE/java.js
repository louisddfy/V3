function addition()
 { var num1 = parseFloat(document.getElementById('t1').value); var num2 = parseFloat(document.getElementById('t2').value); document.getElementById('t3').value = num1 + num2; } 
 function soustraction() 
 { var num1 = parseFloat(document.getElementById('t1').value); var num2 = parseFloat(document.getElementById('t2').value); document.getElementById('t3').value = num1 - num2; }
  function division()
   { var num1 = parseFloat(document.getElementById('t1').value); var num2 = parseFloat(document.getElementById('t2').value); if (num2 === 0) { alert("Division par zéro n'est pas autorisée."); } else { document.getElementById('t3').value = num1 / num2; } } 
   function multiplication() 
   { var num1 = parseFloat(document.getElementById('t1').value); var num2 = parseFloat(document.getElementById('t2').value); document.getElementById('t3').value = num1 * num2; } 
   function parite()
    { var num = parseInt(document.getElementById('t1').value); if (num % 2 === 0) { document.getElementById('t4').value = "Pair"; } else { document.getElementById('t4').value = "Impair"; } } 
    function permute() 
    { var num1 = document.getElementById('t1').value; var num2 = document.getElementById('t2').value; document.getElementById('t1').value = num2; document.getElementById('t2').value = num1; }
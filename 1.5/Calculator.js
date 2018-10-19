document.getElementById("result").onclick = function Calculation() {

    var n1 = document.getElementById("n1").value;
    
    n1 = parseInt(n1);
    
    var n2 = document.getElementById("n2").value;
    n2 = parseInt(n2);
    var operation = document.getElementById("operation").value;
    switch (operation) {

        case '-':
            alert(n1 - n2);
            break;
        case '*' :
            alert(n1 * n2);
            break;
        case '/' :
            alert(n1 / n2);
            break;
        case 'sqrt':
            alert(Math.sqrt(n1));
            break;
        case '+' :
            alert(n1 + n2);
            break;
        case '!':
            var rval = 1;
            for (var i = 2; i <= n1; i++)
                rval = rval * i;
            alert(rval);

            break;

        default:
            alert('Таких значений мне извесны');
    }

}

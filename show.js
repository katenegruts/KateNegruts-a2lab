

document.getElementById("schedule").onclick =  function showTable() {

    document.getElementById('table1').style.visibility = "visible";

    document.getElementById('table2').style.visibility = "hidden";

}

document.getElementById("calls").onclick = function hideTable() {

    document.getElementById('table1').style.visibility = "hidden";

    document.getElementById('table2').style.visibility = "visible";

}

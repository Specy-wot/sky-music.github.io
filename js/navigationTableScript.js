window.addEventListener("load", function() {

    let body = document.getElementsByTagName("body")[0];
    let navigationTable = document.createElement("table");
    navigationTable.id = "navigation";
    
    tableInsideHTML = '<tr><td><a href="../index.html"><img src="../assets/images/sky-music-logo-sheets.png" width="100" height="100" /></a></td>' +
                      '<td><h1><a href="../index.html">Sky Music</a></h1></td></tr>';


    navigationTable.insertAdjacentHTML('afterbegin', tableInsideHTML);
    
    body.insertBefore(navigationTable, body.firstChild);
    
})
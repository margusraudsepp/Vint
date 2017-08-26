document.write("<style>table td b {color:black;} strong{color:black;} .thickbox img,.menu_txt img {border-radius:5px;}</style>");

var Saavutusedtr = document.createElement("tr");
var Saavutusedtrtd = document.createElement("td");
var Saavutusedtrtdb = document.createElement("td");
var Saavutusedtrtdbtext = document.createElement("td");

Saavutusedtrtdb.setAttribute("style", "font-weight: bold;float:left;color:black;");

Saavutusedtrtdbtext.setAttribute("style", "font-weight: normal;float:right;color:rgb(1, 138, 255);");

Saavutusedtrtd.setAttribute("background", "/images/user_profile/bg03.png");
Saavutusedtrtd.setAttribute("height", "20");


Saavutusedtrtdb.appendChild(document.createTextNode("Saavutused: "));
Saavutusedtrtdbtext.appendChild(document.createTextNode(" Eesti Meister 4-kesi perepodiknoi 2016"));

Saavutusedtrtdb.appendChild(Saavutusedtrtdbtext);
Saavutusedtrtd.appendChild(Saavutusedtrtdb);
Saavutusedtr.appendChild(Saavutusedtrtd);

document.getElementsByTagName("table")[4].appendChild(Saavutusedtr);


document.getElementsByTagName("table")[4].setAttribute("style", "color:rgb(1, 138, 255);");
//document.getElementsByTagName("table b")[4].setAttribute("style", "color:black;");

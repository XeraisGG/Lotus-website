function bootloader(){
var URL1 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=I2&output=csv";
var URL2 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=I3&output=csv";
var URL3 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=I4&output=csv";
var URL4 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=I5&output=csv";
// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.variable1 =xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",Url1, false);
xmlhttp.send(null);

// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.variable2 =xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",Url2, false);
xmlhttp.send(null);
// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.variable3 =xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",Url3, false);
xmlhttp.send(null);
// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.variable4 =xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",Url4, false);
xmlhttp.send(null);

if (sessionStorage.variable1 == "TRUE") {
    $solos();
  } else {
    document.getElementById("solos").style.display = "none";
  }
if (sessionStorage.variable2 == "TRUE") {
    $duos();
  } else {
    document.getElementById("duos").style.display = "none";
  }
if (sessionStorage.variable3 == "TRUE") {
    $trios();
  } else {
    document.getElementById("trios").style.display = "none";
  }
if (sessionStorage.variable4 == "TRUE") {
    $teams();
  } else {
    document.getElementById("teams").style.display = "none";
  }
}
//Solos Series
function $solos(){
var RowN1 = "2";
var CellA1 = "A" + RowN1;
var CellB1 = "B" + RowN1;
var CellC1 = "C" + RowN1;
var CellD1 = "F" + RowN1;
var CellE1 = "G" + RowN1;
var CellF1 = "H" + RowN1;
var UrlA1 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellA1 + "&output=csv";
var UrlB1 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellB1 + "&output=csv";
var UrlC1 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellC1 + "&output=csv";
var UrlD1 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellD1 + "&output=csv";
var UrlE1 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellE1 + "&output=csv";
var UrlF1 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellF1 + "&output=csv";

// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
// Here you can use the Data
if (xmlhttp.readyState == 4) {
  sessionStorage.Tournaments1 = xmlhttp.responseText;
  //alert(xmlhttp.responseText);
}
};
// Send a request
xmlhttp.open("GET",UrlA1, false);
xmlhttp.send(null);

// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.TeamsA1 = xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",UrlB1, false);
xmlhttp.send(null);

// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.TeamsB1 = xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",UrlC1, false);
xmlhttp.send(null);

                // Create an XMLHttpRequest object
                xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.Dates1  =  xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",UrlF1, false);
xmlhttp.send(null);

// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.Fee1 =xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",UrlD1, false);
xmlhttp.send(null);

// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.Prizes1 =xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",UrlE1, false);
xmlhttp.send(null);

//Post to website
document.getElementById("TournamentB1").innerHTML = sessionStorage.Tournaments1;
document.getElementById("Teams1").innerHTML = sessionStorage.TeamsA1 + " " + "/" + sessionStorage.TeamsB1 + " " + "Teams";
document.getElementById("Date1").innerHTML = sessionStorage.Dates1;
document.getElementById("EntryB1").innerHTML = "Entry Fee: " + sessionStorage.Fee1;
document.getElementById("PrizeB1").innerHTML = "Prize Pool: " + sessionStorage.Prizes1;
}
//Duos Series
function $duos(){
var RowN2 = "3";
var CellA2 = "A" + RowN2;
var CellB2 = "B" + RowN2;
var CellC2 = "C" + RowN2;
var CellD2 = "F" + RowN2;
var CellE2 = "G" + RowN2;
var CellF2 = "H" + RowN2;
var UrlA2 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellA2 + "&output=csv";
var UrlB2 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellB2 + "&output=csv";
var UrlC2 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellC2 + "&output=csv";
var UrlD2 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellD2 + "&output=csv";
var UrlE2 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellE2 + "&output=csv";
var UrlF2 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellF2 + "&output=csv";

// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
// Here you can use the Data
if (xmlhttp.readyState == 4) {
  sessionStorage.Tournaments2 = xmlhttp.responseText;
  //alert(xmlhttp.responseText);
}
};
// Send a request
xmlhttp.open("GET",UrlA2, false);
xmlhttp.send(null);

// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.TeamsA2 = xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",UrlB2, false);
xmlhttp.send(null);

// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.TeamsB2 = xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",UrlC2, false);
xmlhttp.send(null);

                // Create an XMLHttpRequest object
                xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.Dates2  =  xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",UrlF2, false);
xmlhttp.send(null);

// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.Fee2 =xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",UrlD2, false);
xmlhttp.send(null);

// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.Prizes2 =xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",UrlE2, false);
xmlhttp.send(null);

//Post to website
document.getElementById("TournamentB2").innerHTML = sessionStorage.Tournaments2;
document.getElementById("Teams2").innerHTML = sessionStorage.TeamsA2 + " " + "/" + sessionStorage.TeamsB2 + " " + "Teams";
document.getElementById("Date2").innerHTML = sessionStorage.Dates2;
document.getElementById("EntryB2").innerHTML = "Entry Fee: " + sessionStorage.Fee2;
document.getElementById("PrizeB2").innerHTML = "Prize Pool: " + sessionStorage.Prizes2;
}
//Trios Series
function $trios(){
var RowN3 = "4";
var CellA3 = "A" + RowN3;
var CellB3 = "B" + RowN3;
var CellC3 = "C" + RowN3;
var CellD3 = "F" + RowN3;
var CellE3 = "G" + RowN3;
var CellF3 = "H" + RowN3;
var UrlA3 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellA3 + "&output=csv";
var UrlB3 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellB3 + "&output=csv";
var UrlC3 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellC3 + "&output=csv";
var UrlD3 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellD3 + "&output=csv";
var UrlE3 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellE3 + "&output=csv";
var UrlF3 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellF3 + "&output=csv";

// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
// Here you can use the Data
if (xmlhttp.readyState == 4) {
  sessionStorage.Tournaments3 = xmlhttp.responseText;
  //alert(xmlhttp.responseText);
}
};
// Send a request
xmlhttp.open("GET",UrlA3, false);
xmlhttp.send(null);

// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.TeamsA3 = xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",UrlB3, false);
xmlhttp.send(null);

// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.TeamsB3 = xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",UrlC3, false);
xmlhttp.send(null);

                // Create an XMLHttpRequest object
                xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.Dates3  =  xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",UrlF3, false);
xmlhttp.send(null);

// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.Fee3 =xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",UrlD3, false);
xmlhttp.send(null);

// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.Prizes3 =xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",UrlE3, false);
xmlhttp.send(null);

//Post to website
document.getElementById("TournamentB3").innerHTML = sessionStorage.Tournaments3;
document.getElementById("Teams3").innerHTML = sessionStorage.TeamsA3 + " " + "/" + sessionStorage.TeamsB3 + " " + "Teams";
document.getElementById("Date3").innerHTML = sessionStorage.Dates3;
document.getElementById("EntryB3").innerHTML = "Entry Fee: " + sessionStorage.Fee3;
document.getElementById("PrizeB3").innerHTML = "Prize Pool: " + sessionStorage.Prizes3;
}
//Teams Series
function $teams(){
var RowN4 = "5";
var CellA4 = "A" + RowN4;
var CellB4 = "B" + RowN4;
var CellC4 = "C" + RowN4;
var CellD4 = "F" + RowN4;
var CellE4 = "G" + RowN4;
var CellF4 = "H" + RowN4;
var UrlA4 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellA4 + "&output=csv";
var UrlB4 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellB4 + "&output=csv";
var UrlC4 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellC4 + "&output=csv";
var UrlD4 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellD4 + "&output=csv";
var UrlE4 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellE4 + "&output=csv";
var UrlF4 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG3wMKJ8I-b3CxZPbyRrGc1E2iaPmkkFtbi5zUrrqAviqHU8BMXXfy1siqn7NiKP3zWLhPZfAaGm-i/pub?gid=125047055&single=true&range=" + CellF4 + "&output=csv";

// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
// Here you can use the Data
if (xmlhttp.readyState == 4) {
  sessionStorage.Tournaments4 = xmlhttp.responseText;
  //alert(xmlhttp.responseText);
}
};
// Send a request
xmlhttp.open("GET",UrlA4, false);
xmlhttp.send(null);

// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.TeamsA4 = xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",UrlB4, false);
xmlhttp.send(null);

// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.TeamsB4 = xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",UrlC4, false);
xmlhttp.send(null);

                // Create an XMLHttpRequest object
                xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.Dates4  =  xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",UrlF4, false);
xmlhttp.send(null);

// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.Fee4 =xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",UrlD4, false);
xmlhttp.send(null);

// Create an XMLHttpRequest object
xmlhttp = new XMLHttpRequest();
// Define a callback function
xmlhttp.onreadystatechange = function () {
    // Here you can use the Data
  if (xmlhttp.readyState == 4) {
    sessionStorage.Prizes4 =xmlhttp.responseText;
      //alert(xmlhttp.responseText);
  }
};
// Send a request
xmlhttp.open("GET",UrlE4, false);
xmlhttp.send(null);

//Post to website
document.getElementById("TournamentB4").innerHTML = sessionStorage.Tournaments4;
document.getElementById("Teams4").innerHTML = sessionStorage.TeamsA4 + " " + "/" + sessionStorage.TeamsB4 + " " + "Teams";
document.getElementById("Date4").innerHTML = sessionStorage.Dates4;
document.getElementById("EntryB4").innerHTML = "Entry Fee: " + sessionStorage.Fee4;
document.getElementById("PrizeB4").innerHTML = "Prize Pool: " + sessionStorage.Prizes4;
}

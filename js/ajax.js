const divTag = document.getElementById('test');
const xhr =  new XMLHttpRequest();
const fname = "test";
const lname = "tester"
let jsonText;
xhr.open("POST", "dom.php");
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhr.onload = function () {
    jsonText = JSON.parse(this.responseText);
    divTag.innerHTML = `Fname = ${jsonText.Fname} Lnmae = ${jsonText.Lname}`;
}

xhr.send(`Fname=${fname}&Lname=${lname}`);



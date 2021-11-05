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

async function getUsers() {
    let res = await fetch('https://randomuser.me/api/?results=10');
    let data = await res.json()
    console.log(res);
}

async function setPost() {
    let _data = {
        title: "foo",
        body: "bar", 
        userId:1
      }
    let  req = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        body: JSON.stringify(_data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    });
    let res = await req.json()
    console.log(res);
}

setPost();

// fetch(url, {
//     method: "get", //put your method
//     headers: {
//       "Content-Type": "application/json",
//       "X-Requested-With": "XMLHttpRequest",
//       "Access-Control-Allow-Origin": "*"
//     },
//     mode: 'no-cors'
//   });
  
  //Note: works fine in chrome browsers


/* .js files add interaction to your website */
var factList = 
 [ "Six to Nine million of People in the US has scoliosis",/*0*/
  "Girls are more likey to develop scoliosis",/*1*/
  "",/*2*/
  "Scoliosis is most common to ages ten to 15 years old",/*3*/
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;


myButton.addEventListener("click", displayFact);
function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}

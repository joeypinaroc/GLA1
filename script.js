//full name and style
let fullName = document.createElement('h1');
fullName.innerHTML = 'Joey Pinaroc'
fullName.style.textAlign = 'center'
fullName.style.color = '#A9A9A9';
document.getElementsByTagName('body')[0].appendChild(fullName);

//two input elements and one button
var div1 = document.createElement('div'); //create container div1 for input box 1 and error box 1
var div2 = document.createElement('div'); //create container div2 for input box 2 and error box 2
var div3 = document.createElement('div'); //create container div3 for sum button and sum box
document.getElementsByTagName('body')[0].appendChild(div1);
document.getElementsByTagName('body')[0].appendChild(div2);
document.getElementsByTagName('body')[0].appendChild(div3);

var inputBox1 = document.createElement('input');
var inputBox2 = document.createElement('input');
var btn = document.createElement('button');
var errorBox1 = document.createElement('span'); //create error boxes
var errorBox2 = document.createElement('span');

div1.appendChild(inputBox1);
div1.appendChild(errorBox1);

div2.appendChild(inputBox2);
div2.appendChild(errorBox2);

div3.appendChild(btn);
btn.innerHTML = 'Get sum';

errorBox1.style.display = 'none';
errorBox2.style.display = 'none';

//sum element
var sumBox = document.createElement('p');
sumBox.style.display = 'none';
div3.appendChild(sumBox);

//get sum on click function
var num1;
var num2;
btn.addEventListener('click', ()=>{
    num1 = inputBox1.value;
    num2 = inputBox2.value;
    var sum = parseInt(num1) + parseInt(num2); //parseInt() to convert to int
    sumBox.innerHTML = "The sum is: " + parseInt(sum);

    sumBox.style.display = 'block';
    sumBox.style.padding = '5px';
    sumBox.style.border = 'solid';
    sumBox.style.borderColor = 'green';
    sumBox.style.backgroundColor = 'light green';

    inputBox1.style.borderColor = 'black';
    inputBox2.style.borderColor = 'black';

    //validate input boxes
    num1 = inputBox1.value;
    try {
        if(isNaN(num1)) throw 'needs to be a number';
    }   
    catch(err) {
        errorBox1.innerHTML = 'Input ' + err;
        errorBox1.style.color = 'red';
        errorBox1.style.display = 'block';
        inputBox1.style.borderColor = 'red';
        sumBox.style.display = 'none';
    }
    if(isNaN(num1) == 0){
        errorBox1.style.display = 'none';
    }

    num2 = inputBox2.value;
    try {
        if(isNaN(num2)) throw 'needs to be a number';
    }   
    catch(err) {
        errorBox2.innerHTML = 'Input ' + err;
        errorBox2.style.color = 'red';
        errorBox2.style.display = 'block';
        inputBox2.style.borderColor = 'red';
        sumBox.style.display = 'none';
    }
    if(isNaN(num2) == 0){
        errorBox2.style.display = 'none';
    }
})

//style
document.getElementsByTagName('body')[0].style.textAlign = 'center';
document.getElementsByTagName('body')[0].style.backgroundColor = 'lightblue';

div1.style.display = 'flex';
div1.style.justifyContent = 'center';

div2.style.display = 'flex';
div2.style.justifyContent = 'center';

div3.style.display = 'flex';
div3.style.justifyContent = 'center';
div3.style.gap = '15px';

inputBox1.style.width = '100px';
inputBox2.style.width = '100px';
btn.style.width = '100px';

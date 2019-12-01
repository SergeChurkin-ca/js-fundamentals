/*
	TODO:
  
  	1. Create an empty variable, `elm`
  	2. Find a paragraph by its tag name
    3. Set `elm` to the variable that you found
    4. Alert the inner text of the element with `alert` function, it should alert the text "JavaScript on The DOM" or "Hello World!"
*/
var array = document.getElementsByTagName('p');
var elm = [];
for ( var i = 0; i < array.length; i++) {
	elm.push(array[i].innerText)
	}
alert(elm);


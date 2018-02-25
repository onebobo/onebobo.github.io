var canvas = document.getElementById("my_canvas");
var button = document.getElementById("saveBtn");
var input1 = document.getElementById("txt1");
var input2 = document.getElementById("txt2");
//var textArea = document.getElementById("textArea");

var context = canvas.getContext('2d');

ii = new Image();
ii.crossOringin="Anonymous";
ii.src="/images/psb.jpg";
context.font = "bold 14pt Microsoft YaHei";
context.textAlign = "center";
context.fillStyle = "white";
context.strokeStyle = "blue";

ii.onload = function(){
	context.drawImage(ii,0,0,400,701);
};

function inputListener(){
	context.clearRect(0, 0,canvas.width, canvas.height);
	context.drawImage(ii,0,0,400,701);
	context.strokeText(input1.value,200,215);
	context.fillText(input1.value,200,215);
	context.strokeText(input2.value,200,450);
	context.fillText(input2.value,200,450);
}

input1.oninput = inputListener;
input2.oninput = inputListener;

function saveFile() {
	var dataUrl = canvas.toDataURL();
//	textArea.value = dataUrl;
	window.open(dataUrl);
}

button.onclick = saveFile;


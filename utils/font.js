/*
* context：绘图上下文
* font：字体
* size：字体大小
* fillColor：填充色
* strokeColor：描边色
* text：文字内容
* posX：横坐标
* posY：纵坐标
*/
function drawText(context,font,size,fillColor,strokeColor,text,posX,posY){
	context.font = size+'pt '+font;
	context.fillStyle = fillColor;
	context.strokeStyle = strokeColor;
	context.fillText(text, posX, posY);
	context.strokeText(text, posX, posY);
}
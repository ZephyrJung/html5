/*
* 画圆
*/
function drawCircle(context,posX,posY,radius,fill){
	context.beginPath();
	//0：起始角度
	//Math.PI*2：结束角度
	context.arc(posX, posY,radius, 0, Math.PI*2, true);
	if(fill){
		context.fill();
	}else{
		context.stroke();
	}
}

/*
* 根据起止位置画线段
*/
function drawLineByPoints(context,startX, startY, endX, endY) {
	context.moveTo(startX, startY);
	context.lineTo(endX, endY);
	context.stroke();
}

/*
* 根据角度和长度画线段
*/
function drawLineByAngle(context,posX,posY,angle,length) {
	context.moveTo(posX, posX);
	context.lineTo(posX  + Math.cos(angle)*length, posX + Math.sin(angle)*length);
	context.stroke();
}
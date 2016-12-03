/*
* 画圆
*/
function drawCircle(context,posX,posY,radius,color,fill){
	context.beginPath();
	//0：起始角度
	//Math.PI*2：结束角度
	context.arc(posX, posY,radius, 0, Math.PI*2, true);

	if(fill){
		context.fillStyle = color;
		context.fill();
	}else{
		context.strokeStyle = color;
		context.stroke();
	}
}


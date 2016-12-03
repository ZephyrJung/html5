/*
* 绘制矩形
* a,b代表左上角坐标
* c,d代表右下角坐标
*/
function drawRect(a,b,c,d,color,fill){
	if(fill){
		context.fillStyle = color;
		context.fillRect(a,b,c,d);
	}else{
		context.strokeStyle = color;
		context.strokeRect(a,b,c,d);
	}
}
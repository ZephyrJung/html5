/*
* 绘制矩形
* a,b代表左上角坐标
* c,d代表右下角坐标
* color代表填充或描边颜色
* width代表线的粗细
* fill代表是否填充
*/
function drawRect(a,b,c,d,color,width,fill){
	context.lineWidth = width;
	if(fill){
		context.fillStyle = color;
		context.fillRect(a,b,c,d);
	}else{
		context.strokeStyle = color;
		context.strokeRect(a,b,c,d);
	}
}

/*
* 绘制圆角矩阵
*/
function drawRoundRect(a,b,c,d,color,width,fill){
	context.lineWidth = width;
	context.lineJoin = 'round';
	if(fill){
		context.fillStyle = color;
		context.fillRect(a,b,c,d);
	}else{
		context.strokeStyle = color;
		context.strokeRect(a,b,c,d);
	}
}
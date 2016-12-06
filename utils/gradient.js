/*
* 问题，如何传入变长参数，Java示例如下：
* List<Param>
* class Param{ String percent,String color };
* 预计参数：context，gradient方法四参数包(如param.a,param.b,param.c,param.d)
  ，渐变参数包(p[0].per,p[0].color,p[1].per,p[1].color...)
*/
function linearGradient(context,){
	var gradient = context.createLinearGradient(0,0,0,canvas.height/2);
	gradient.addColorStop(0, 'blue');
	gradient.addColorStop(0.25, 'white');
	gradient.addColorStop(0.5, 'purple');
	gradient.addColorStop(0.75, 'red');
	gradient.addColorStop(1, 'yellow');
	context.fillStyle = gradient;
	context.rect(0, 0, canvas.width, canvas.height);
	context.fill();
}

function radicalGradient(context){
	var gradient = context.createRadialGradient(canvas.width/2, canvas.height, 10,canvas.width/2, 0, 100);
	gradient.addColorStop(0, 'blue');
	gradient.addColorStop(0.25, 'white');
	gradient.addColorStop(0.5, 'purple');
	gradient.addColorStop(0.75, 'red');
	gradient.addColorStop(1, 'yellow');
	context.fillStyle = gradient;
	context.rect(0, 0, canvas.width, canvas.height);
	context.fill();
}
/*
* :pushpin: 对context的设置应该放在方法外部
* :question: 0.5的作用意味不明……
*/

/*
* 绘制网格
*/
function drawGrid(context, stepx, stepy) {
   for (var i = stepx + 0.5; i < context.canvas.width; i += stepx) {
      drawVerticalLine(context,i);
   }
   for (var i = stepy + 0.5; i < context.canvas.height; i += stepy) {
      drawHorizontalLine(context,i);
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

/*
* 画全长竖线
*/
function drawVerticalLine (context,x) {
   context.beginPath();
   context.moveTo(x+0.5,0);
   context.lineTo(x+0.5,context.canvas.height);
   context.stroke();
}

/*
* 画全长横线
*/
function drawHorizontalLine (context,y) {
   context.beginPath();
   context.moveTo(0,y+0.5);
   context.lineTo(context.canvas.width,y+0.5);
   context.stroke();
}

/*
* 绘制虚线
*/
function drawDashedLine(context, x1, y1, x2, y2, dashLength) {
   dashLength = dashLength === undefined ? 5 : dashLength;
   var deltaX = x2 - x1;
   var deltaY = y2 - y1;
   var numDashes = Math.floor(
       Math.sqrt(deltaX * deltaX + deltaY * deltaY) / dashLength);
   //这段看起来有点牛逼啊。。。
   for (var i=0; i < numDashes; ++i) {
      context[ i % 2 === 0 ? 'moveTo' : 'lineTo' ]
         (x1 + (deltaX / numDashes) * i, y1 + (deltaY / numDashes) * i);
   }
   context.stroke();
};
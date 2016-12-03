/*
* 绘制网格
*/
function drawGrid(context, color, stepx, stepy) {
   context.strokeStyle = color;
   context.lineWidth = 0.5;

   for (var i = stepx + 0.5; i < context.canvas.width; i += stepx) {
      context.beginPath();
      context.moveTo(i, 0);
      context.lineTo(i, context.canvas.height);
      context.stroke();
   }

   for (var i = stepy + 0.5; i < context.canvas.height; i += stepy) {
      context.beginPath();
      context.moveTo(0, i);
      context.lineTo(context.canvas.width, i);
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
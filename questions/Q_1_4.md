function drawNumerals() {
   var numerals = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
       angle = 0,
       numeralWidth = 0;

   numerals.forEach(function(numeral) {
      angle = Math.PI/6 * (numeral-3);
      numeralWidth = context.measureText(numeral).width;
      context.fillText(numeral, 
         canvas.width/2  + Math.cos(angle)*(HAND_RADIUS) - numeralWidth/2,
         canvas.height/2 + Math.sin(angle)*(HAND_RADIUS) + FONT_HEIGHT/3);
   });
}
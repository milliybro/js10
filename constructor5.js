let rect = new Rectangle(5, 3);

function Rectangle(width, height) {
   this.width = width;
   this.height = height;
 }
 
 Rectangle.prototype.getArea = function() {
   return this.width * this.height;
 };
 
 Rectangle.prototype.getPerimeter = function() {
   return 2 * (this.width + this.height);
 };
 
 console.log(rect.getArea()); 
 console.log(rect.getPerimeter());
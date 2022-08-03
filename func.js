canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;
    
    color = "black";
    widthOfLine = 2;

    canvas.addEventListener("mousedown", myMouseDown);

    canvas = document.getElementById('myCanvas');
     ctx = canvas.getContext("2d");
      var width = screen.width; newWidth = screen.width - 70;
       newHeight = screen.height - 300;
        if(width < 992) 
        { 
            document.getElementById("myCanvas").width = newWidth;
         document.getElementById("myCanvas").height = newHeight;
          document.body.style.overflow = "hidden";
         } 
    canvas.addEventListener("touchstart", myTouchStart);

    function myMouseDown(e)
    {
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;

        mouseEvent = "mouseDown";
    }
    canvas.addEventListener("mouseup", myMouseUp);
    function myMouseUp(e)
    {
        mouseEvent = "mouseUP";
    }
    canvas.addEventListener("mouseleave", myMouseLeave);
    function myMouseLeave(e)
    {
        mouseEvent = "mouseleave";
    }
    canvas.addEventListener("mousemove", myMouseMove);
    function myMouseMove(e)
    {

         currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
         currentPositionOfMouseY = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;

        console.log("Ultima posição das coordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("Posição atual das coordenadas x e y = ");
        console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
        ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
        ctx.stroke();
        }
        lastPositionOfX = currentPositionOfMouseX; 
        lastPositionOfY = currentPositionOfMouseY;
        function myTouchMove(e) {
        currentPositionOfTouchX=e.touches[0].clientX -canvas.offsetLeft;
        currentPositionOfTouchY=e.touches[0].clientY -canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthOfLine;
        ctx.moveTo(lestPositionOfTouchX ,lestPositionOfTouchY);
        ctx.stroke();
        lestPositionOfTouchX = currentPositionOfTouchX
        lestPositionOfTouchY = currentPositionOfTouchY
        }
    }
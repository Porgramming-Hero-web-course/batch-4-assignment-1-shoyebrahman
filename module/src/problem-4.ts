{
    // problem 4

    type Circle = {
        shape : "circle";
        radius: number;
    }

    type Rectangle = {
        shape : "rectangle";
        hight: number;
        width: number;
    }
    type Shape = Circle | Rectangle;

    function calculateShapeArea (shape: Shape): number{
        if(shape.shape === "circle") {
            return Math.PI* Math.pow(shape.radius, 2);

        }
        else if (shape.shape === "rectangle"){
            return shape.width*shape.hight;
        }
        else{
           console.error("enter the value first");
           return 0;
           
        }
    }
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea);

    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        hight: 6,
      });
      console.log(rectangleArea);
    
}
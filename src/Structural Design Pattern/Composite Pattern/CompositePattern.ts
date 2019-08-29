interface Graphic {
    draw();
    move(x, y);
}

class Dot implements Graphic {
    x: number;
    y: number;
    
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    draw(){
        console.log(`Current coordinate (${this.x}, ${this.y})`);
    }
    move(x,y)
    {
        this.x += x;
        this.y += y;
    }
}

class Circle implements Dot{
    x: number;
    y: number;
    radius: number;
  
    constructor(x, y, radius) {
        this.radius = radius;
        this.x = x;
        this.y = y;
    }

    draw(){
        console.log(`Current coordinate (${this.x}, ${this.y}), radious: ${this.radius}`);
    }

    move(x,y)
    {
        this.x = this.x + x;
        this.y = this.y + y;
    }
}

class CompoundGraphic implements Graphic {
    children: Graphic[] = [];
    
    // constructor(c: Graphic[]) {
    //     this.children = c;
    // }

    add(c: Graphic){
        this.children.push(c);
    }

    remove(c: Graphic){
        // check the c and remove it from array
        //this.children.find(c)
    }

    draw()
    {
        this.children.forEach(element => {
            element.draw();
        });
    }
    move(x,y)
    {
        this.children.forEach(element => {
            element.move(x,y);
        });
    }
}

class ImageEditor{
    all = new CompoundGraphic();
    x: number;
    y: number;
    load()
    {
        let dot = new Dot(3,7);
        let circle = new Circle(3,7,2);
        this.all.add(dot);
        this.all.add(circle);
    }

    sampleDraw()
    {
        this.all.draw();
    }

    sampleMove(x,y)
    {
        this.all.move(x,y);
    }
    // array of graphics and do something
    // create 2nd compound graphic and load that this.all

}

let imgEditor = new ImageEditor();
imgEditor.load();
imgEditor.sampleDraw();
imgEditor.sampleMove(2,7);
imgEditor.sampleDraw();


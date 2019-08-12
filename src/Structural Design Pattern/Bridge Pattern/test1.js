class Shape
{
  constructor(renderer, name=null)
  {
    this.renderer = renderer;
    this.name = name;
  }

  toString()
  {
    return `Drawing ${this.name} as ${this.renderer.whatToRenderAs}`;
  }
}

class Triangle extends Shape
{
  constructor(renderer)
  {
    super(renderer, 'triangle');
  }
}

class Square extends Shape
{
  constructor(renderer)
  {
    super(renderer, 'square');
  }
}

class VectorRenderer 
{
  get whatToRenderAs()
  {
    return 'lines';
  }
}

class RasterRenderer 
{
  get whatToRenderAs()
  {
    return 'pixels';
  }
}

var triangle1 = new Triangle(new RasterRenderer());
console.log(triangle1.toString());


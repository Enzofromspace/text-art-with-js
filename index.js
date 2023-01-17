const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';
    context.font = '1200px sans-serif';
    context.textBaseline = 'middle';
   // context.textAlign = 'center'; better method to center below
    
    const text = 'E';
    const metrics = context.measureText(text);

    context.save();
   // context.translate(width * 0.5, height * 0.5); not needed with

    context.fillText(text, 0, 0);
    context.restore();

  };
};

canvasSketch(sketch, settings);

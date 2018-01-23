export default class Sprite {
  constructor({context, width, height, image, sx, sy, dx, dy}) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.image = image;
    this.sx = sx;
    this.sy = sy;
    this.dx = dx;
    this.dy = dy;
  }

  render() {
    this.context.drawImage(
      this.image,
      this.sx,
      this.sy,
      this.width,
      this.height,
      this.dx,
      this.dy,
      this.width,
      this.height
    );
  }
}

export default class Sprite {
  constructor({ctx, width, height, image, sx, sy, dx, dy}) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.image = image;
    this.sx = sx;
    this.sy = sy;
    this.dx = dx;
    this.dy = dy;
  }

  render() {
    this.ctx.drawImage(
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

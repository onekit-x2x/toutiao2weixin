export default class CanvasContext {
  constructor(weixinCanvasContext) {
    this.weixinCanvasContext = weixinCanvasContext
  }

  draw() {
    return this.weixinCanvasContext.draw.apply(this, arguments)
  }

  beginPath() {
    return this.weixinCanvasContext.beginPath()
  }

  clip() {
    return this.weixinCanvasContext.clip()
  }

  lineTo() {
    return this.weixinCanvasContext.lineTo.apply(this, arguments)
  }

  setFontSize(size) {
    return this.weixinCanvasContext.setFontSize(size)
  }

  setFillStyle(color) {
    return this.weixinCanvasContext.setFillStyle(color)
  }

  createLinearGradient() {
    return this.weixinCanvasContext.createLinearGradient.apply(this, arguments)
  }

  setStrokeStyle(color) {
    return this.setStrokeStyle(color)
  }

  setGlobalAlpha(alpha) {
    return this.setGlobalAlpha(alpha)
  }

  setShadow() {
    return this.weixinCanvasContext.setShadow.apply(this, arguments)
  }

  setLineDash() {
    return this.weixinCanvasContext.setLineDash.apply(this, arguments)
  }

  fill() {
    return this.weixinCanvasContext.fill()
  }

  stroke() {
    return this.weixinCanvasContext.stroke()
  }

  fillRect() {
    return this.weixinCanvasContext.fillRect.apply(this, arguments)
  }

  strokeRect() {
    return this.weixinCanvasContext.strokeRect.apply(this, arguments)
  }

  drawImage() {
    return this.weixinCanvasContext.drawImage.apply(this, arguments)
  }

  measureText(string) {
    return this.weixinCanvasContext.measureText(string)
  } 
  
  scale() {
    return this.weixinCanvasContext.scale.apply(this, arguments)
  }

  rotate(r) {
    return this.weixinCanvasContext.rotate(r)
  }

  translate() {
    return this.weixinCanvasContext.translate.apply(this, arguments)
  }

  save() {
    return this.weixinCanvasContext.save()
  }

  restore() {
    return this.weixinCanvasContext.restore()
  }

  clearRect() {
    return this.weixinCanvasContext.clearRect.apply(this, arguments)
  }

  fillText() {
    return this.weixinCanvasContext.fillText.apply(this, arguments)
  }

  setTextAlign(string) {
    return this.weixinCanvasContext.setTextAlign(string)
  }

  setLineCap(string) {
    return this.weixinCanvasContext.setLineCap(string)
  }

  setLineJoin(string) {
    return this.weixinCanvasContext.setLineJoin(string)
  }

  setLineWidth(string) {
    return this.weixinCanvasContext.setLineWidth(string)
  }
  
  setMiterLimit(string) {
    return this.weixinCanvasContext.setMiterLimit(string)
  }
  
  setTextBaseline(string) {
    return this.weixinCanvasContext.setTextBaseline(string)
  }

  transform() {
    return this.weixinCanvasContext.transform.apply(this, arguments)
  }

  setTransform() {
    return this.weixinCanvasContext.setTransform.apply(this, arguments)
  }
  
  moveTo() {
    return this.weixinCanvasContext.moveTo.apply(this, arguments)
  }

  arc() {
    return this.weixinCanvasContext.arc.apply(this, arguments)
  }

  quadraticCurveTo() {
    return this.weixinCanvasContext.quadraticCurveTo.apply(this, arguments)
  }

  bezierCurveTo() {
    return this.weixinCanvasContext.bezierCurveTo.apply(this, arguments)
  }

  closePath() {
    return this.weixinCanvasContext.closePath()
  }
}

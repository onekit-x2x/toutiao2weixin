/* eslint-disable no-console */
export default class CanvasContext {
  constructor(weixinCanvasContext) {
    this.weixinCanvasContext = weixinCanvasContext
  }

  draw(...args) {
    return this.weixinCanvasContext.draw.apply(this, args)
  }

  beginPath() {
    return this.weixinCanvasContext.beginPath()
  }

  clip() {
    return this.weixinCanvasContext.clip()
  }

  lineTo(...args) {
    return this.weixinCanvasContext.lineTo.apply(this, args)
  }

  setFontSize(...args) {
    return this.weixinCanvasContext.setFontSize.apply(this, args)
  }

  setFillStyle(...args) {
    return this.weixinCanvasContext.setFillStyle.apply(this, args)
  }

  createLinearGradient(...args) {
    return this.weixinCanvasContext.createLinearGradient.apply(this, args)
  }

  setStrokeStyle(...args) {
    return this.weixinCanvasContext.setStrokeStyle.apply(this, args)
  }

  setGlobalAlpha(...args) {
    return this.weixinCanvasContext.setGlobalAlpha.apply(this, args)
  }

  setShadow(...args) {
    return this.weixinCanvasContext.setShadow.apply(this, args)
  }

  setLineDash(...args) {
    return this.weixinCanvasContext.setLineDash.apply(this, args)
  }

  fill() {
    return this.weixinCanvasContext.fill()
  }

  stroke() {
    return this.weixinCanvasContext.stroke()
  }

  fillRect(...args) {
    return this.weixinCanvasContext.fillRect.apply(this, args)
  }

  strokeRect(...args) {
    return this.weixinCanvasContext.strokeRect.apply(this, args)
  }

  drawImage(...args) {
    return this.weixinCanvasContext.drawImage.apply(this, args)
  }

  measureText(...args) {
    return this.weixinCanvasContext.measureText.apply(this, args)
  }

  scale(...args) {
    return this.weixinCanvasContext.scale.apply(this, args)
  }

  rotate(...args) {
    return this.weixinCanvasContext.rotate.apply(this, args)
  }

  translate(...args) {
    return this.weixinCanvasContext.translate.apply(this, args)
  }

  save() {
    return this.weixinCanvasContext.save()
  }

  restore() {
    return this.weixinCanvasContext.restore()
  }

  clearRect(...args) {
    return this.weixinCanvasContext.clearRect.apply(this, args)
  }

  fillText(...args) {
    return this.weixinCanvasContext.fillText.apply(this, args)
  }

  setTextAlign(...args) {
    return this.weixinCanvasContext.setTextAlign.apply(this, args)
  }

  setLineCap(...args) {
    return this.weixinCanvasContext.setLineCap.apply(this, args)
  }

  setLineJoin(...args) {
    return this.weixinCanvasContext.setLineJoin.apply(this, args)
  }

  setLineWidth(...args) {
    return this.weixinCanvasContext.setLineWidth.apply(this, args)
  }

  setMiterLimit(...args) {
    return this.weixinCanvasContext.setMiterLimit.apply(this, args)
  }

  setTextBaseline(...args) {
    return this.weixinCanvasContext.setTextBaseline.apply(this, args)
  }

  transform(...args) {
    return this.weixinCanvasContext.transform.apply(this, args)
  }

  setTransform(...args) {
    return this.weixinCanvasContext.setTransform.apply(this, args)
  }

  moveTo(...args) {
    return this.weixinCanvasContext.moveTo.apply(this, args)
  }

  arc(...args) {
    return this.weixinCanvasContext.arc.apply(this, args)
  }

  quadraticCurveTo(...args) {
    return this.weixinCanvasContext.quadraticCurveTo.apply(this, args)
  }

  bezierCurveTo(...args) {
    return this.weixinCanvasContext.bezierCurveTo.apply(this, args)
  }

  closePath() {
    return this.weixinCanvasContext.closePath()
  }

  set font(font) {
    this.weixinCanvasContext.font = font
  }

  // toutiao is not support
  static set lineWidth(lineWidth) {
    console.warn(`toutiao is not support lineCap lineWidth ${lineWidth}`)
  }

  static set textAlign(textAlign) {
    console.warn(`toutiao is not support lineCap ${textAlign}`)
  }

  static set textBaseline(textBaseline) {
    console.warn(`toutiao is not support textBaseline ${textBaseline}`)
  }

  static set fillStyle(fillStyle) {
    console.warn(`toutiao is not support fillStyle ${fillStyle}`)
  }

  static set lineCap(lineCap) {
    console.warn(`toutiao is not support lineCap ${lineCap}`)
  }
}

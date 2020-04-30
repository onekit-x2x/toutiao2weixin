import tt from "../../../../onekit/tt"

const texts = [
  '2011年1月，头条1.0发布',
  '同年5月，头条2.0语音对讲发布',
  '10月，头条3.0新增摇一摇功能',
  '2012年3月，头条用户突破1亿',
  '4月份，头条4.0朋友圈发布',
  '同年7月，头条4.2发布公众平台',
  '2013年8月，头条5.0发布头条支付',
  '2014年9月，企业号发布',
  '同月，发布头条卡包',
  '2015年1月，头条第一条朋友圈广告',
  '2016年1月，企业头条发布',
  '2017年1月，小程序发布',
  '......'
]

Page({
  onShareAppMessage() {
    return {
      title: 'text',
      path: 'page/component/pages/text/text'
    }
  },

  data: {
    text: '',
    canAdd: true,
    canRemove: false
  },
  extraLine: [],

  add() {
    this.extraLine.push(texts[this.extraLine.length % 12])
    this.setData({
      text: this.extraLine.join('\n'),
      canAdd: this.extraLine.length < 12,
      canRemove: this.extraLine.length > 0
    })
    setTimeout(() => {
      this.setData({
        scrollTop: 99999
      })
    }, 0)
  },
  remove() {
    if (this.extraLine.length > 0) {
      this.extraLine.pop()
      this.setData({
        text: this.extraLine.join('\n'),
        canAdd: this.extraLine.length < 12,
        canRemove: this.extraLine.length > 0,
      })
    }
    setTimeout(() => {
      this.setData({
        scrollTop: 99999
      })
    }, 0)
  }
})

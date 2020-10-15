/* eslint-disable camelcase */
const TT_USER_FOLDER = 'ttfile://user/'
const WX_USER_FOLDER = `${wx.env.USER_DATA_PATH}/`

function set_ttpath2wxpath(ext, tt_filePath) {
  let wx_filePath
  if (tt_filePath) {
    wx_filePath = tt_filePath.replace(TT_USER_FOLDER, WX_USER_FOLDER)
  } else {
    const randomString = Math.floor(Math.random() * (1 - 10000000) + 10000000)
    const _filePath = `${randomString}${ext}`
    tt_filePath = `${TT_USER_FOLDER}${_filePath}`
    wx_filePath = `${WX_USER_FOLDER}${_filePath}`
  }
  return wx_filePath
}

function get_ttpath2wxpath(tt_path) {
  const wx_path = tt_path.replace(TT_USER_FOLDER, WX_USER_FOLDER)
  return wx_path
}

/*
OneKit.current = function () {
  const pages = getCurrentPages()
  if (pages.length === 0) {
    return {}
  }
  return pages[pages.length - 1]
}
OneKit.currentUrl = function () {
  return OneKit.current().route
} */
module.exports = {set_ttpath2wxpath, get_ttpath2wxpath}

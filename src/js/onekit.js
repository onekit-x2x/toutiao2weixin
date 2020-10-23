/* eslint-disable camelcase */
const TT_USER_FOLDER = 'ttfile://user/'
const WX_USER_FOLDER = `${wx.env.USER_DATA_PATH}/`

function new_tt_filePath(ext) {
  const randomString = Math.floor(Math.random() * (1 - 10000000) + 10000000)
  const tt_filePath = `${TT_USER_FOLDER}${randomString}${ext}`
  return tt_filePath
}

function tt_filePath2wx_filePath(tt_filePath) {
  // eslint-disable-next-line no-undef
  const wx_storePath = getApp().ttSavePath2wxRandomPath[tt_filePath]
  if (wx_storePath) {
    return wx_storePath
  } else {
    const wx_filePath = tt_filePath.replace(TT_USER_FOLDER, WX_USER_FOLDER)
    return wx_filePath
  }
}

function save_wx_storePath(tt_filePath, wx_storePath) {
  // eslint-disable-next-line no-undef
  if (!getApp().ttSavePath2wxStorePath) {
    // eslint-disable-next-line no-undef
    getApp().ttSavePath2wxStorePath = {}
  }
  // eslint-disable-next-line no-undef
  getApp().ttSavePath2wxStorePath[tt_filePath] = wx_storePath
  // ///////////////////////
  // eslint-disable-next-line no-undef
  if (!getApp().wxStorePath2ttSavePath) {
    // eslint-disable-next-line no-undef
    getApp().wxStorePath2ttSavePath = {}
  }
  // eslint-disable-next-line no-undef
  getApp().wxStorePath2ttSavePath[wx_storePath] = tt_filePath
}
function current() {
  const pages = getCurrentPages()
  if (pages.length === 0) {
    return {}
  }
  return pages[pages.length - 1]
}
function currentUrl() {
  return current().route
}
module.exports = {
  save_wx_storePath,
  new_tt_filePath,
  tt_filePath2wx_filePath,
  current,
  currentUrl
}

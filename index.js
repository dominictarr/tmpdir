var isWindows = process.platform === 'win32'


module.exports = function () {
  if (isWindows) {
    return process.env.TEMP ||
      process.env.TMP ||
      (process.env.SystemRoot || process.env.windir) + '\\temp'
  } else {
    return process.env.TMPDIR ||
      process.env.TMP ||
      process.env.TEMP ||
      '/tmp'
  }
}

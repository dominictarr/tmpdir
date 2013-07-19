var os = require('os')

module.exports = ( os.tmpdir                                         //0.10
                || os.tmpDir                                         //0.8
                || function () {return process.env.TMPDIR || '/tmp'} //0.6
)()



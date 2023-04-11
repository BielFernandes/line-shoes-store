const multer = require('multer')
const diskStorageMulter = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/img/produtos')
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname)
    }
})
const upload = multer({storage:diskStorageMulter})

module.exports = upload
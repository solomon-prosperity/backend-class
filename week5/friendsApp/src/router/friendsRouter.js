const express = require(`express`)
const {
    createFriend,
    getFriend,
    getFriends,
    updateFriend,
    deleteFriend,
    search,
    signIn,
    uploadAvatar
} = require('../controller/friends')

const router = express.Router()

const verifyToken = require('../middlewares/verifyToken')
const upload = require('../utils/upload')

// localhost:5000/friend/1

router.get('/',verifyToken, getFriends)
router.post('/login', signIn)
router.post('/', createFriend)
router.get('/:personId', getFriend)
router.put('/:personId', updateFriend)
router.delete('/:personId', deleteFriend)
router.get('/search/all', search)
router.post('/upload-avatar',verifyToken, upload.single('avatar'), uploadAvatar)

module.exports = router
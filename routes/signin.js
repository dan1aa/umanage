const router = require('express').Router();

router.get('/signin', (req, res) => {
    res.render('signin', {
        cssFileName: 'signin'
    })
})

module.exports = router;
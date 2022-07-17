const router = require('express').Router();

router.get('/signup', (req, res) => {
    res.render('signup', {
        cssFileName: 'signup'
    })
})

module.exports = router;
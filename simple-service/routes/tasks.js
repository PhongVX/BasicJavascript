const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { 
    res.json({text:'Hello'});
});

module.exports = router;
const express = require('express');

const router = express.Router();
const { index, graphqlGet, graphqlPost } = require('./controllers');

router.get('/', index);
router.get('/graphql/', graphqlGet);
router.post('/graphql/', graphqlPost);

module.exports = router;

const router = require('express').Router();
const { User, Post } = require('../../models');

// get all users
router.get('/', (req, res) => {
 console.log('=================');
 Post.findAll({
  attributes: ['id', 'post_url', 'title', 'created_at'],
  include: [
   { 
    model: User,
    attributes: ['username']
   }
  ]
 })
 .then(dbPostData => res.json(dbPostData))
 .catch(err => {
  console.log(err);
  res.status(500).json(err);
 });
});

model.exports = router;
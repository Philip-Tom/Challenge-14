const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts for dashboard
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.userId },
      include: [{ model: User }],
    });
    
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('dashboard', { posts, loggedIn: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET edit post page
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (!postData) {
      res.status(404).render('404',{ message: 'No post found with this id' });
      return;
    }

    const post = postData.get({ plain: true });
    // console.log(post)
    res.render('editPost', { post, loggedIn: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET create new post page
router.get('/new', withAuth, (req, res) => {
  res.render('newPost', { loggedIn: true });
});

module.exports = router;

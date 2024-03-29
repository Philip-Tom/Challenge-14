const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('homepage', { 
      posts, 
      loggedIn: req.session.loggedIn 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username','id'],
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['username','id'],
            },
          ],
        },
      ],
    });
    
    if (!postData) {
      res.status(404).render('404',{ message: 'No post found with this id!'});
      return;
    }

    const post = postData.get({ plain: true });

    res.render('singlePost', { 
      post, 
      loggedIn: req.session.loggedIn ,
      currentUserID:req.session.userId
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.userId,
    });
    res.status(201).redirect(`/`);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const [updatedPost] = await Post.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.userId,
        },
      }
    );
    if (!updatedPost) {
      res.status(404).render('404',{ message: 'No post found with this id!'})
      return;
    }

    res.status(200).json({message:"Successfully updated"});
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.userId,
      },
    });

    if (!postData) {
      res.status(404).render('404',{ message: 'No post found with this id!'});
      return;
    }

    res.status(200).json({message:"Successfully deleted"});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

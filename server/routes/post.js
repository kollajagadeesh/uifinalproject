const express = require('express');
const post = require('../models/post');
const router = express.Router();

router





.post('/getpost', async (req, res) => {
    try {
      let postget = await post.getpost(req.body.id);
      res.send(postget)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })


  .post('/createpost', async (req, res) => {
    try {
      let creates = await post.createpost(req.body.id, req.body.postcontent);
      res.send(creates)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  


  .post('/updatepost', async (req, res) => {
    try {
      let updates = await post.updatepost(req.body.id, req.body.postcontent);
      res.send(updates)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  .post('/deletepost', async (req, res) => {
    try {
      let deletes= await post.deletepost(req.body.id);
      res.send(deletes)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  
module.exports=router;
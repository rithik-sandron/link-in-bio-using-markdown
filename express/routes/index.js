var express = require('express');
const { run } = require('../db/mongo');
var router = express.Router();
const multer = require('multer')
var path = require('path');
var md = require('../hooks/converter')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `uploads/`)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    req.body.filename = uniqueSuffix + file.originalname;
    cb(null, uniqueSuffix + file.originalname)
  }
})

const upload = multer({ storage: storage })

router.get('/', async function (req, res) {
  res.json('zro');
});

router.get('/u', async function (req, res) {
  const callback = async function (db) {
    return await db.collection("users").find().toArray();
  }
  const data = await run(callback);
  res.send(data);
});

router.post('/u/create', upload.single('file'), async function (req, res) {
  const callback = async function (db) {
    const users = db.collection("users");
    const md_content = await md.convert(req.body.content);
    console.log(md_content)
    const user = {
      username: req.body.username,
      bgcolor: req.body.bgcolor,
      color: req.body.color,
      content: req.body.content,
      markdown: md_content,
      file_path: req.body.filename
    }

    const result = await users.insertOne(user);
    if (result.insertedId)
      return { isDone: true, username: user.username };
    else {
      return { isDone: false, redirect: '/' }
    }
  }

  const data = await run(callback);
  res.send(data);
});

router.get('/u/:username', async function (req, res) {
  const username = req.params.username;
  const callback = async function (db) {
    return await db.collection("users").findOne({ username: username });
  }
  const data = await run(callback);
  res.send(data);
});

module.exports = router;
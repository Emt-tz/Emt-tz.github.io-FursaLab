const { getAllPosts } = require("../db/posts_db");

const postsroute = async (req, res) => {
  var posts = await getAllPosts();
  var results = JSON.parse(JSON.stringify(posts));
  res.render("posts_temp", { posts: results });
};

module.exports = { postsroute };

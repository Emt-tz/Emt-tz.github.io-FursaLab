const path = require("path");

const {getAllPosts} = require("../db/posts_db")

const postsroute = async(req, res)=>{
    // res.sendFile(path.join(__dirname, '../', 'posts.html'))
    var total_posts = [
        {
            postid: 1,
            post_description: 'i am system',
            post_title: 'nodejs',
            date_created: "2022-02-04T02:30:30.000Z",
            post_views: 50,
            post_replies: 500,
            user_name: 'emt'
          },
        {
          postid: 2,
          post_description: 'i am system',
          post_title: 'nodejs',
          date_created: "2022-02-04T02:30:30.000Z",
          post_views: 50,
          post_replies: 500,
          user_name: 'emt'
        },{
            postid: 3,
            post_description: 'i am system',
            post_title: 'nodejs',
            date_created: "2022-02-04T02:30:30.000Z",
            post_views: 50,
            post_replies: 500,
            user_name: 'emt'
          }
      ]
      
    console.log(total_posts)
    res.render("posts_temp",{posts:total_posts});
}

module.exports = {postsroute};
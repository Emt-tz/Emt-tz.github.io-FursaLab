/*
model:
postid
Title ya post
userid
Time posted
description
views
replies


//comments (table)
commentid
postid
userid
time commented
comment


*/

const res = require("express/lib/response");
const { connection } = require("./db");


// const newpost = `
// INSERT INTO posts (post_description,post_title,date_created,post_views,post_replies,user_name) VALUES ("i am system","nodejs","2022-02-03 18:30:30",50,500,"emt")
// `

const readposts = `SELECT * FROM posts`;


const getAllPosts = () => {
    var posts = [];
    connection.query(readposts, function (error, results, fields) {
        if (error) throw error;
        for (var i = 0; i < results.length; i++) {
            posts.push(results[i]);
        }
        console.log(posts);
        return posts;
    });
    
}


module.exports = { getAllPosts };
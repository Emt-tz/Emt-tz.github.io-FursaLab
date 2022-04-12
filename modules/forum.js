const path = require("path");

const forumroute = (req, res)=>{
   // res.sendFile(path.join(__dirname, '../', 'forums.html'))
   res.render("forums");
}

module.exports = {forumroute};
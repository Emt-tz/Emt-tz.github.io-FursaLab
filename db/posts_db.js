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

const newpost = `
INSERT INTO posts (post_description,post_title,date_created,post_views,post_replies,user_name) VALUES ("Kada wa Chama Cha Mapinduzi (CCM), Abdallah Bulembo, amekiomba Chama hicho kumhoji na kumchukulia hatua za kinidhamu Mbunge wa Kisesa, Luhaga Mpina kwa kile alichokiita kwenda kinyume na maadili ya chama.

Bulembo ambaye ni Mwenyekiti mstaafu wa Jumuiya ya Wazazi ya Chama hicho, ametoa ushauri huo katika mkutano wake na waandishi wa habari akijibu shutuma zilizotolewa na Mpina hivi majuzi baada ya Waziri wa Nishati January Makamba kuondoa tozo ya tsh. 100 kwenye lita ya mafuta.

Bw. Bulembo pia amesema hatua hiyo ya Mpina ni sawa na kumdhihaki Rais wa Jamhuri ya Muungano wa Tanzania kwa kuwa alikwishalizungumzia suala hilo kwa kulitolea ufafanuzi.

Kupitia mkutano wake na waandishi wa habari, Mpina alisema kitendo hicho cha Waziri Makamba ni sawa na uhujumu uchumi, akivitaka vyombo vya uchunguzi vifanye kazi kwa madai kuwa ni kuwaumiza wananchi.","Bulembo ataka rungu la CCM limshukie Mpina","2022-02-03 18:30:30",50,500,"Airtel")
`;

const readposts = `SELECT * FROM posts`;

var getAllPosts = () => {
  return new Promise((resolve, reject) => {
    connection.query(readposts, function (err, result, fields) {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};
module.exports = { getAllPosts };

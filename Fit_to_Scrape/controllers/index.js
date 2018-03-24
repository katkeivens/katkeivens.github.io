var axios = require("axios");
var cheerio = require("cheerio");

var db = require("../models");

module.exports = {
  scrape: function(req, res) {
    axios.get("https://www.reddit.com/r/nottheonion/top/?sort=top&t=all").then(function(response) {
      console.log(response)

      var $ = cheerio.load(response.data);

      $("p.title").each(function(i, element) {

        var result = {};

        result.title = $(element)
          .text();
        result.link = $(element)
          .children()
          .attr("href");

        db.Article.create(result)
          .then(function(dbArticle) {
            console.log(dbArticle);
          })
          .catch(function(err) {
            return res.json(err);
          });
      });

      res.send("Scrape Complete");
    });
  },

  getArticles: function(req, res) {
    db.Article.find({})
      .limit(20)
      .then(function(dbArticle) {
        res.json(dbArticle);
      })
      .catch(function(err) {
        res.json(err);
      });
  },

  getArticle: function(req, res) {
    db.Article.findOne({ _id: req.params.id })
      .populate("note")
      .then(function(dbArticle) {
        res.json(dbArticle);
      })
      .catch(function(err) {
        res.json(err);
      });
  },

  updateArticle: function(req, res) {
    db.Note.create(req.body)
      .then(function(dbNote) {
        return db.Article.findOneAndUpdate({ _id: req.params.id }, { $push: {note: dbNote._id }});
      })
      .then(function(dbUser) {
        res.json(dbUser);
      })
      .catch(function(err) {
        res.json(err);
      });
  },

  getNotes: function(req, res) {
    db.Note.find({})
    .then(function(dbNote) {
      res.json(dbNote);
    })
  },

  note: function(req, res) {
    db.Note.find({_id: req.params.id})
    .then(function(dbNote) {
      res.json(dbNote);
    })
  },

  deleteNote: function(req, res) {
    db.Note.findOneAndRemove({_id: req.params.id}, function(err) {
      if (err) throw err;
      console.log("Note has been deleted.")
    })
  }
  
}
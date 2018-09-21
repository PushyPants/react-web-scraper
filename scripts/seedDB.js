const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Articles collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/react_web_scraper"
);

const articleSeed = [
  {
    "saved": false,
    "title": "Two of Samsung's livelier mid-range devices reach the US",
    "snippet": "The Galaxy A6 in particular could reel in budget phone buyers.",
    "href": "https://engadget.com/2018/09/08/samsungs-livened-up-mid-range-devices-reach-the-us/",
    "imgUrl": "https://o.aolcdn.com/images/dims?thumbnail=300%2C200&quality=80&image_uri=https%3A%2F%2Fs.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F988399fa5eea9b3ebd8123c37048f030%2F206650114%2Fsamsung-galaxy-a6.jpg&client=amp-blogside-v2&signature=82f93f8918ef92602bf13b171b82c50607c7f4be",
    "__v": 0
}
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

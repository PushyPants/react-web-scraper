import axios from "axios";

const queryUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=d3f3cbde3a3340ce81d028354153da31&sort=newest';



export default {
  // Gets all articles
  getArticles: function() {
    return axios.get(queryUrl);
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};

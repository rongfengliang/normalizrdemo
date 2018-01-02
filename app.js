const userjson = require("./user.json");
const { normalize, schema } = require('normalizr');
const user = new schema.Entity('users');
const comment = new schema.Entity('comments', {
  commenter: user
});
const article = new schema.Entity('articles', { 
  author: user,
  comments: [ comment ]
});
const normalizedData = normalize(userjson, article);
console.log(normalizedData)
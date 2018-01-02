const { normalize, schema } = require('normalizr');
const myData = require("./demo.json");
const apps =new schema.Entity("apps",{},{idAttribute:"app_id"});
const user = new schema.Entity("app_users",{},{idAttribute:"user_id"}) 
const userinfo = new schema.Array(apps);
const mySchema = [apps]
const normalizedData = normalize(myData, mySchema);
console.log(normalizedData)
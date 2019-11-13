const db = require("../data/dbConfig");

function find() {
  return db("users").select("id", "username");
}

function findBy(filter) {
  return db("users").where(filter);
}

function add(user) {
  return db("users").insert(user);
}

module.exports = {
  find,
  findBy,
  add
};

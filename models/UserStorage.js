const db = require("../config/db");

class userStorage {
  static getUserInfo(id) {
    return new Promise ((resolve, reject) => {
      const query = "SELECT * FROM Users WHERE id=?";
      db.query(query, [id], (err, data) => {
        if (err) {
          reject(err);
        }
          resolve(data[0]);
          console.log(data[0]);
      });
    });
  };

  static save(userInfo) {
    return new Promise ((resolve, reject) => {
      const query = "INSERT INTO users(id, name, password) VALUES(?, ?, ? )";
        
      db.query(query, [userInfo.id, userInfo.name, userInfo.password], (err) => {
        if (err) reject(err);
        resolve({ success: true });
      });
    });
  };
};

module.exports = userStorage;
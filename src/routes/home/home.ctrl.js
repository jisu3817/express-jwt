"use strict";
const User = require("../../../models/User");
const jwt = require("../../../models/jwt");

const output = {
  home: (req, res) => {
  //   const token = req.cookies['token'];
  //   if (token = undefined) {
  //     return res.json("토큰이 존재하지 않습니다.");
  //   }
  // //   const payload = jwt.verifyToken(token);
  // //   return res.json(payload);
  },
}

const process = {
  login: async (req, res) => {
  const user = new User(req.body);
  const response = await user.login();

  if (response.success) {
    const token = jwt.createToken(req.body.id);
    res.cookie('token', token, { httpOnly: true });
    console.log(req.cookies);
    response["token"] = token;
    console.log(response);
    res.status(200).json(response);
  } 
  else res.status(401).json(response);

},
  
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();

    if (response.success) {
      res.status(200).json(response);
    } 
    else res.status(400).json(response);
  },
};

module.exports = {
  output,
  process
};
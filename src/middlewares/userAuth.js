const axios = require("axios");

const UserAuth = async (req, res, next) => {

  const { token } = req.body;

  if (!req.headers.authorization) return res.status(400).json({ error: "You don't have permission to access" })
  else if (!req.headers.key) return res.status(400).json({ error: "You don't have permission to access" })
  else {
    
    const request = await axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=${req.headers.key}`, 
    {"idToken": req.headers.authorization})

    if (request.data.users.length > 0) {
      next();
    } else {
      return res.status(400).json({ error: "You don't have permission to access" })
    }
  }

}

module.exports = UserAuth;
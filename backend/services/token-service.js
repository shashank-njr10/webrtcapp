const jwt = require("jsonwebtoken");

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

class TokenService {
  generateAccessToken(payload) {
    const accessToken = jwt.sign(payload, accessTokenSecret, {
      expiresIn: "1h", // Access token valid for 15 minutes
    });
    const refreshToken = jwt.sign(payload, refreshTokenSecret, {
      expiresIn: "30d", // Refresh token valid for 30 days
    });
    return { accessToken, refreshToken };
  }
}

module.exports = new TokenService();

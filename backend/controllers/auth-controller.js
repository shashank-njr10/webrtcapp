const otpService = require("../services/otp-service");
const hashService = require("../services/hash-service");
const userService = require("../services/user-service");
const tokenService = require("../services/token-service");
const UserDto = require("../dtos/user-dto.js");



class AuthController {
  async sendOtp(req, res) {
    try {
      const { phone } = req.body || {};

      if (!phone) {
        return res.status(400).json({ message: "Phone number is required" });
      }

      const otp = await otpService.generateOtp();
      const ttl = 1000 * 60 * 2;
      const expires = Date.now() + ttl;
      const data = `${phone}.${otp}.${expires}`;
      const hash = hashService.hashOtp(data);

      // await otpService.sendBySms(phone, otp);

      return res.json({
        hash: `${hash}.${expires}`,
        phone,
        otp, // Only include OTP in dev mode
      });
    } catch (error) {
      console.error("Error in sendOtp:", error);
      return res.status(500).json({ message: "Error generating OTP" });
    }
  }

  async verifyOtp(req, res) {
    const { otp, hash, phone } = req.body;

    if (!otp || !hash || !phone) {
      return res.status(400).json({ message: "All fields are required" }); // ✅ return added
    }

    const [hashedOtp, expires] = hash.split(".");
    if (Date.now() > +expires) {
      return res.status(400).json({ message: "OTP expired" }); // ✅ return added
    }

    const data = `${phone}.${otp}.${expires}`;
    const isValid = otpService.verifyOtp(hashedOtp, data);

    if (!isValid) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    let user;
    try {
      user = await userService.findUser({ phone }); // ✅ await added
      if (!user) {
        user = await userService.createUser({ phone });
      }
    } catch (error) {
      console.log("DB Error:", error);
      return res.status(500).json({ message: "Db error" }); // ✅ return added
    }

    const { accessToken, refreshToken } = tokenService.generateAccessTokens({
      _id: user._id,
      activated: false,
    });

    res.cookie("refreshToken", refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    const userDto = new UserDto(user);
    return res.json({ accessToken, user: userDto });
  }
}

module.exports = new AuthController();

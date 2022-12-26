const User = require("../model/user");
const { sendError, createRandomBytes } = require("../utils/helper");
const ResetToken = require("../model/resetToken");
const jwt = require("jsonwebtoken");

const crypto = require("crypto");
const { mailTransport, generatePasswordResetTemplate } = require("../utils/mail");

const nodemailer = require('nodemailer');


exports.createUser = async (req, res) => {
  const { name, email, password, mobile } = req.body;
  const isNewUser = await User.isThisEmailInUse(email);
  if (!isNewUser)
    return res.json({
      success: false,
      message: "This email is already in use, try sign-in",
    });
  const user = await User({
    name,
    email,
    password,
    mobile,
  });
  await user.save();
  res.json({
    success: true,
    user: { name: user.name, email: user.email, mobile: user.mobile, id: user._id},
  });
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  if (!email.trim() || !password.trim())
    return sendError(res, "email/password missing!");

  const user = await User.findOne({ email });
  if (!user) return sendError(res, "User not found");
  const isMatched = await user.comparePassword(password);

  if (!isMatched) return sendError(res, "email/password does not match!");

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.json({
    success: true,
    user: { name: user.name, email: user.email, id: user._id, token: token },
  });
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) return sendError(res, "Please provide a valid email");

  const user = await User.findOne({ email });
  if (!user) return sendError(res, "User not found, invalid request!");

  const token = await ResetToken.findOne({ owner: user._id });
    
  if (token)
    return sendError(
      res,
      "Only after one hour you can request for another token!"
    );
    
  const newToken = await createRandomBytes()
  const resetToken = new ResetToken({ owner: user._id, token: newToken })
  await resetToken.save();
//   console.log("hello");
  mailTransport().sendMail({
    from: "security@gmail.com",
    to: user.email,
    subject: "Password Reset",
    html: generatePasswordResetTemplate(
      `http://localhost:3000/reset-password?token=${newToken}&id=${user._id}`
    ),
  });

  res.json({
    success: true,
    message: "Password reset link is sent to your email.",
  });
};

const authmodel = require("../model/models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const posting = async (req, res) => {
  const data = req.body;
  let pass = data.password;

  // Fix: Correct the password length condition
  if (pass.length < 6) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 6 characters long.",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(pass, salt);

  try {
    await authmodel.create({
      username: data.username,
      email: data.email,
      password: hashpassword,
    });
    res.status(201).json({
      // 201 is better for resource creation
      success: true,
      message: "User created successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Sign-up failed: ${err.message}`,
    });
  }
};

const getting = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await authmodel.findOne({ username: username });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password",
      });
    }

    const accessTowken = jwt.sign({
      userId:user._id,
      username:user.username,
      email:user.email,
    }, process.env.JWT_SECRET_KEY , {
      expiresIn:"1h",
    })



    res.status(200).json({
      success: true,
      message: "Login successful",
      data: accessTowken,
    });


  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Login failed: ${err.message}`,
    });
  }
};

module.exports = { posting, getting };

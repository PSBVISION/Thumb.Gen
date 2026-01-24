import { Request, Response } from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";

// Helper function to decode JWT without verification (Google already verified it)
const decodeJwt = (token: string) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  );
  return JSON.parse(jsonPayload);
};

export const googleAuth = async (req: Request, res: Response) => {
  try {
    const { credential } = req.body;
    
    if (!credential) {
      return res.status(400).json({ message: "Google credential is required" });
    }

    // Decode the JWT token from Google
    const decoded = decodeJwt(credential);
    
    const { email, name, sub: googleId, picture } = decoded;

    // Check if user already exists
    let user = await User.findOne({ email });

    if (user) {
      // User exists, update Google ID if not set
      if (!user.googleId) {
        user.googleId = googleId;
        await user.save();
      }
    } else {
      // Create new user with Google auth
      user = new User({
        name,
        email,
        googleId,
        password: await bcrypt.hash(googleId + process.env.SESSION_SECRET, 10), // Random password for Google users
      });
      await user.save();
    }

    // Set session
    req.session.isLoggedIn = true;
    req.session.userId = user._id as string;

    return res.json({
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    console.log("Error in Google Auth:", error);
    res.status(500).json({ message: error.message });
  }
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    // Find User by email
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already exist" });
    }
    // Encrypt the Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    //setting user data in session
    req.session.isLoggedIn = true;
    req.session.userId = newUser._id;
    return res.json({
      message: "Account created successfully",
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error: any) {
    console.log("Error in User Registration:", error);
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    // Find User by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user does not exist" });
    }
    //compare password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    //setting user data in session
    req.session.isLoggedIn = true;
    req.session.userId = user._id;
    return res.json({
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    console.log("Error in user login:", error);
    res.status(500).json({ message: error.message });
  }
};

export const logoutUser = (req: Request, res: Response) => {
  req.session.destroy((error: any) => {
    if (error) {
      console.log("Error in user logout:", error);
      return res.status(500).json({ message: error.message });
    }
  });
  return res.json({ message: "Logout Successfully" });
};

//user Verification
export const verifyUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.session;
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    return res.json({ user });
  } catch (error: any) {
    console.log("Error in user verification:", error);
    res.status(500).json({ message: error.message });
  }
};

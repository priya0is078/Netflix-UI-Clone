// import { User } from "../models/userModel.js";
// import bcryptjs from "bcryptjs";
// import jwt from "jsonwebtoken"; 

// export const Login = async(req,res)=>{
//     try {
//         const {email,password} = req.body;
//         if(!email || !password) {
//             return res.status(400).json({
//                 message:"Invalid data",
//                 success:false
//             });
//         }
//         const user = await User.findOne({email});
//         if(!user){
//             return res.status(401).json({
//                 message:"Invalid email or password",
//                 success:false
//             });
//         }

//         const isMatch = await bcryptjs.compare(password,user.password);
//         if(!isMatch){
//             return res.status(401).json({
//                 message:"Invalid email or password",
//                 success:false
//             });
//         }

//         const tokenData = {
//             id:user._id
//         }

//        const token = await jwt.sign(tokenData, "poiuytrewqasdfgh",{expiresIn:"1d"});
//         return res.status(200).cookie("token",token,{httpOnly:true}).json({
//             message:`Welcome back ${user.fullName}`,
//            success:true
//         });

//     } catch (error){
//         console.log(error);

//     }
// }

//    export const Logout = async (req,res) => {
//     return res.status(200).cookie("token", "", {expiresIn:new Date(Date.now()),httpOnly:true}).json({
//          message:"User logged out suessfully.",
//         success:true,
//     });
// }

//  export const Register = async (req,res) => {
//      try {
//         const {fullName, email, password} = req.body;
//          if(!fullName || !email || !password){
//              return res.status(401).json({
//                message:"Invalid data",
//                  success:false
//             })
//         }
//         const user = await User.findOne({email});
//         if(user){
//             return res.status(401).json({
//                  message:"This email is already used",
//                 success:false,
//             })
//         }

        
//        const hashedPassword = await bcryptjs.hash(password,16);

//         await User.create({
//            fullName,
//            email,
//             password:hashedPassword
//         });

        

//          return res.status(201).json({
//             message: "Account created successfully.",
//             success: true  // ✅ Corrected spelling & added a comma
//         });
        
//     } catch (error){
//        console.log(error);

//     }
// };
import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                message: "Invalid data. Please provide both email and password.",
                success: false
            });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password.",
                success: false
            });
        }

        // Compare password
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password.",
                success: false
            });
        }

        // Generate token
        const tokenData = { id: user._id };
        const token = await jwt.sign(tokenData, "poiuytrewqasdfgh", { expiresIn: "1d" });

        // Set token in a cookie and send response
        return res.status(200)
            .cookie("token", token, { httpOnly: true })
            .json({
                success: true,
                message: `Welcome back ${user.fullName}`,
                user: {
                    id: user._id,
                    fullName: user.fullName,
                    email: user.email,
                    pin: user.pin || null, // If pin exists
                }
            });

    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({
            message: "Something went wrong. Please try again later.",
            success: false
        });
    }
};

export const Logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { expiresIn: new Date(Date.now()), httpOnly: true }).json({
            message: "User logged out successfully.",
            success: true,
        });
    } catch (error) {
        console.error("Logout Error:", error);
        return res.status(500).json({
            message: "Logout failed. Please try again.",
            success: false,
        });
    }
};

export const Register = async (req, res) => {
    try {
        const { fullName, email, password, pin } = req.body;

        // Validate input
        if (!fullName || !email || !password) {
            return res.status(400).json({
                message: "Please provide full name, email, and password.",
                success: false
            });
        }

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                message: "This email is already in use.",
                success: false,
            });
        }

        // Hash password
        const hashedPassword = await bcryptjs.hash(password, 16);

        // Create new user
        const newUser = await User.create({
            fullName,
            email,
            password: hashedPassword,
            pin  // Save pin if provided
        });

        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        });

    } catch (error) {
        console.error("Registration Error:", error);
        return res.status(500).json({
            message: "Something went wrong. Please try again later.",
            success: false
        });
    }
};

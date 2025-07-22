// import jwt from "jsonwebtoken";
// // import User from "../models/User";

// export const adminAuth = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1];

//     if (!token) {
//       return res
//         .status(401)
//         .json({ message: "No token, authorization denied" });
//     }

//     const decoded = jwt.verify(
//       token,
//       process.env.JWT_SECRET || "your-secret-key"
//     );
//     const user = await User.findById(decoded.userId);

//     if (!user || user.role !== "admin") {
//       return res.status(403).json({ message: "Admin privileges required" });
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     console.error(error);
//     if (error.name === "JsonWebTokenError") {
//       return res.status(401).json({ message: "Invalid token" });
//     }
//     return res.status(500).json({ message: "Server error" });
//   }
// };

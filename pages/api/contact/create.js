// src/pages/api/contact/create.js
import Query from "../models/Query";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(200).json({
      success: false,
      error: true,
      message: "Invalid request method. Only POST is allowed.",
    });
  }

  try {
    const { name, email, course, description } = req.body;
    console.log(name, email, course, description);
    // Basic validation
    if (!name || !email || !course || !description) {
      return res.status(200).json({
        success: false,
        error: true,
        message: "All fields are required.",
        requiredFields: ["name", "email", "course", "description"],
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(200).json({
        success: false,
        error: true,
        message: "Invalid email format.",
      });
    }

    if (course.length < 4 || course.length > 50) {
      return res.status(200).json({
        success: false,
        error: true,
        message: "Course must be between 4 and 50 characters",
      });
    }
    // Insert query into database
    await Query.create(name, email, course, description);
    return res.status(200).json({
      success: true,
      error: false,
      message: "Your message has been submitted successfully.",
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return res.status(500).json({
      success: false,
      error: true,
      message: "Server error. Please try again later.",
    });
  }
}

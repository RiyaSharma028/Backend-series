😊 Backend Learning Journey

This repository tracks my progress as I learn backend development.  
I’m starting from the basics and gradually moving to professional backend setups with clean code, error handling, and API design.

*✨Note: I learned some basics before this, but I consider this as Day 1 because the actual backend development started from here.*

## Day-1 Professional folder-setup
- Learned how to set up a clean and professional backend project structure.
- Installed and configured essential tools.
- Created basic folder structure separating routes, controllers, models, and utilities etc.
- Set up environment variables using `.env` file for secure configuration.

## Day 2 – MongoDB & Mongoose Setup

- Learned how to connect MongoDB with Mongoose.
- Established the database connection.
- Got an overview of Mongoose models.

## Day 3 – Database Connection & Error Handling Utilities

- Ensured the server starts **only after** a successful database connection.
- Created `ApiResponse` class to send consistent success responses.
- Created `ApiError` class to handle custom errors effectively.
- Built `asyncHandler` utility to catch errors in async functions easily.

## Day 4 – Authentication & Schema Enhancements

- Created two Mongoose models: `User` and `Video`.
- Learned and implemented **JWT-based authentication**, using:
  - Access Tokens (short-lived) for secure API access
  - Refresh Tokens (long-lived) stored in HTTP-only cookies
- Understood and implemented **pre/post hooks** (Mongoose middleware) for automating logic like password hashing.
- Added **custom instance methods** to the User schema for reusable logic (e.g., comparing hashed passwords).
- Integrated **bcrypt** to securely hash passwords before saving them to the database.

## Day 5– Routes & Controllers (Professional Standard)

- Learned how to create modular routes using express.Router().
- Separated route definitions from business logic by using controllers.
- Connected all route files in the main app using app.use() with base paths like /api/v1/users
- Followed professional practices by maintaining a clear folder structure.

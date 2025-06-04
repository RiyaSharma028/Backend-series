class ApiError extends Error {
  constructor(
    message = "Something went wrong",
    statusCode = 500,
    Errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;  // Correct spelling here!
    this.Errors = Errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;

class ApiResponse{
    constructor(statusCode , data , message = "sucess"){
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = true; // Assuming success is true for a successful response
    }
}

export default ApiResponse;
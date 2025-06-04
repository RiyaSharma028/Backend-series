const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((error) => {
      res.status(500).json({
        success: false,
        message: error.message || "Internal Server Error",
      });
    });
  };
};


export default asyncHandler;




// High order function 

// const asybcfucunction = () => {
//     ()=>{

//     }
// }

// const asybcHandler = (fn) => async (req , res , next) =>{
//       try {
//         await(fn(req, res, next));
//       } catch (error) {
//          res.status(500).json({
//             success: false,
//             message: error.message || "Internal Server Error",
//          });
//       }
// }
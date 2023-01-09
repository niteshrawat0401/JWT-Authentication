const mongoose= require("mongoose");
// nitesh
// niteshrawat
const connection=()=>{
    try {
        const connection= mongoose.connect("mongodb+srv://nitesh:niteshrawat@cluster0.9ryckd6.mongodb.net/allusers?retryWrites=true&w=majority"); 
        console.log("DB Connected", connection);
    } catch (error) {
        console.log("not connected", error);
    }
}
module.exports= connection;
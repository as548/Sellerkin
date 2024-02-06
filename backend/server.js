const app =require("./app")


//Handling Uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled Promise Rejection`);
    process.exit(1);
})


//config
if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({path:"./.env"});
}





const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})


//Unhandled Promise Rejection
process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled Promise Rejection`);
    server.close(()=>{
        process.exit(1);
    })
})
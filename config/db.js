const mongoose=require('mongoose')
require("node:dns/promises").setServers(["1.1.1.1","8.8.8.8"]);

mongoose.connect(process.env.DB_CONNECTION).then(res=>{
    console.log("Database connection Success");
}).catch(err=>{
    console.log("Database Connection Failed");
    console.log(err);
})
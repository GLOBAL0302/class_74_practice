import express from "express";
import messageRouter from "./routers/Messages";

const app = express();
const port = 8000;


app.use(express.json());

app.use("/messages", messageRouter);


const run = async ()=>{


    app.listen(port, ()=>{
        console.log(`Server running at port http://localhost:${port}`);
    })
}

run().catch(err=>{
    console.error(err)})
import express from "express";

const messageRouter = express.Router();

messageRouter.get("/", (req, res)=>{
    res.send("Hello World!");
})

messageRouter.post("/", (req, res)=>{

})



export default messageRouter;
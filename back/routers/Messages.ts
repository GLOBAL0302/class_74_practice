import express from "express";
import {promises as fs} from "fs"
import {INewMessage} from "../types";

const messageRouter = express.Router();
const path = "./messages";

messageRouter.get("/", async (req, res)=>{
    const allMessages:INewMessage[] = [];
    const files = await fs.readdir(path);
    for (const file of files) {
        let oneFile = await fs.readFile(path + "/" + file)
        const result = JSON.parse(oneFile.toString());
        allMessages.push(result);
    }
    res.send(allMessages.reverse().slice(0,5));
})

messageRouter.post("/", async (req, res)=>{
    const newMessage:INewMessage = {
        message: req.body.message,
        dateTime: new Date().toISOString(),
    }
    await fs.writeFile(`${path}/${newMessage.dateTime}.txt`, JSON.stringify(newMessage));
    res.status(200).send(newMessage);
})


export default messageRouter;
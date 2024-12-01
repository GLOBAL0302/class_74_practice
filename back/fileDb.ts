import {INewMessage} from "./types";
import {promises as fs} from "fs"

let date:INewMessage[] = []
const path = "./messages"

const fileDb = {
    async init(){
        try {
            const files = await fs.readFile(path)
        }catch(err){
            console.log(err);
        }
    },

    async addMessage(){

    }
}

export default fileDb
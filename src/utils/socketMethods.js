import { socket } from "../config/socket"


export const connectionSocket =()=>{
    const socket_ = socket();
    socket_.emit("connection");
    return socket_;
}
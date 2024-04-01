import { createContext } from "react";
import { connectionSocket } from "../utils/socketMethods";
import { socket } from "../config/socket";

export const socket_ = socket();

export const SocketContext = createContext();
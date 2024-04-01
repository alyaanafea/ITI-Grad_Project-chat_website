import axios from "axios"
import { API } from "../constant/Constants"


export const instance = axios.create({
    baseURL:API
})
import { instance } from "./api";


export async function login(data){
    try {
        const req = instance.post("/auth/login")
    } catch (error) {
        console.log(error);
        return "error";
    }
}

export async function signUp(data){
    try {
        const req = (await instance.post("/auth/signup",data)).data;
        // console.log("Successfully SignUp");
        return req;
    } catch (error) {
        console.log(error);
        return "error";
    }
}
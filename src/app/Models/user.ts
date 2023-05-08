import { Role } from "./roles"

export class User{
    id?:number
    firstName?:string
    lastName?:string
    username?:string
    dateOfBirth?:Date
    email?:string
    contactNumber?:string
    createdAt?:Date
    password?:string
    token?:string
    role?:Role[]


}

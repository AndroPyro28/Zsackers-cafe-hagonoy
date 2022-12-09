export interface Signup {
    firstname: string;
    lastname: string;
    email: string;
    address: string;
    contact: string;
    password: string;
    confirmPassword: string;
    role: ROLE
}

export interface Signin {
    email: string;
    password: string;
}

type ROLE = "ADMIN" | "STAFF" | "CUSTOMER"

interface profile {
    id:number
    firstname:string
    lastname:string
    contact:string
    address:string
    imageUrl:string
}

export interface User {
    id: number     
    createdAt: string;    
    updatedAt: string;    
    email: string  
    isVerify: boolean      
    role:     ROLE    
    profile: profile
}
export interface Signup {
    firstname: string;
    lastname: string;
    email: string;
    address: string;
    contact: string;
    password: string;
    confirmPassword: string;
}

export interface Signin {
    email: string;
    password: string;
}
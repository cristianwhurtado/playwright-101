import dotenv from 'dotenv';
dotenv.config();


export const URLS = {
    SAUCEDEMOURL: process.env.SAUCEDEMOURL,
    SAUCEDEMOURLINV: process.env.SAUCEDEMOURLINV
}

export const CREDENTIALS = {
    SAUCEDEMOUSER: process.env.SAUCEDEMOUSER,
    SAUCEDEMOPASS: process.env.SAUCEDEMOPASS
}
import ActiveDirectory from 'activedirectory2';
import { resolve } from 'styled-jsx/css';

const config = {
    url: process.env.AD_URL,
    baseDN: process.env.AD_BASE_DN,
    username: process.env.AD_USERNAME,
    password: process.env.AD_PASSWORD
};

const ad = new ActiveDirectory(config);

export async function authenticate(username, password) {
    return new Promise((resolve, reject) => {
        ad.authenticate(username, password, (err, auth) => {
            if (err) {
                if (err.errno === -4039) {
                    reject({
                        success: false,
                        errorCode: err.code,
                        errorMessage: "ارتباط با سرور برقرار نیست."
                    })
                }
                if (err.code === 49) {
                    reject({
                        success: false,
                        errorCode: err.code,
                        errorMessage: "نام کاربری یا رمز عبور اشتباه است"
                    })
                }
                reject({
                    success: false,
                    errorCode: err.code,
                    errorMessage: err.message,
                });
            } else if (auth) {
                resolve({ success: true });
            } else {
                console.log("else")
                resolve({ success: false });
            }
        });
    });
}


export async function findUser(username) {
    return new Promise((resolve, reject) => {
        ad.findUser({ attributes: ['telephoneNumber', 'userPrincipalName', 'cn'] }, username, (err, user) => {
            if (err) {
                reject({
                    success: false,
                    errorDescription: "user not found"
                })
            }
            else if (user) {
                resolve(user)
            }
            else {
                resolve(false)
            }
        })

    })
}
import ActiveDirectory from "activedirectory2";

const config = {
    url: process.env.AD_URL,
    baseDN: process.env.AD_BASE_DN,
    username: process.env.AD_USERNAME,
    password: process.env.AD_PASSWORD
};

const ad = new ActiveDirectory(config);

export function authenticate(username, password) {
    return new Promise((resolve, reject) => {
        ad.authenticate(username, password, (err, auth) => {
            if (err) {
                reject(`Error during authentication: ${err}`);
            }
            if (auth) {
                resolve("Authenticated successfully");
            } else {
                reject("Authentication failed");
            }
        });
    });
}

export const findUser = (username) => {
    return new Promise((resolve, reject) => {
        ad.findUser(username, (err, user) => {
            if (err) {
                reject(`Error during find user: ${err}`);
            }
            if (!user) {
                reject("User not found");
            } else {
                resolve(user); // Returning user object directly
            }
        });
    });
}

export const searchUser = (username) => {
    const searchOptions = {
        filter: `(&(objectClass=user)(sAMAccountName=${username}))`, // تغییر بر اساس نیاز
        attributes: ['dn', 'cn', 'mail'] // تنظیمات دیگر بر اساس نیاز
    };

    return new Promise((resolve, reject) => {
        ad.findUsers(searchOptions, (err, users) => {
            if (err) {
                reject(`Error during search: ${err}`);
            }
            if (!users || users.length === 0) {
                reject("User not found");
            } else {
                resolve(users);
            }
        });
    });
}
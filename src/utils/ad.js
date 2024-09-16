import ActiveDirectory from "activedirectory2"

const config = {
    url: '',
    baseDN: 'dc=bgr-sh,dc=local',
    username: '',
    password: ''
}

const ad = new ActiveDirectory(config)

export default function authenticate(username, password) {
    return new Promise((resolve, reject) => {
        ad.authenticate(username, password, function (err, auth) {
            if (err) {
                reject(`Error during authentication: ${err.message}`)
            }
            if (auth) {
                resolve("Authenticated successfully")
            } else {
                reject("Authentication faild")
            }
        })
    })
}
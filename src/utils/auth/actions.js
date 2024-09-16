"use server"
export const login = (formData) => {
    const data = {
        username: formData.get("username"),
        password: formData.get("password")
    }
    console.log("action fired 🎆", data)
}
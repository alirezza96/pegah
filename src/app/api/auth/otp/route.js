export const GET = async (response) => {
    const res = await fetch(`https://api.kavenegar.com/v1/${process.env.SMS_TOKEN}/sms/countinbox.json?rceptor=09206862371&token=1234&template=otp`)
    const data = await res.json()

    const { status, message } = data.return
    return Response.json({ message }, { status })
}
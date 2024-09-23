export default function MaskPhoneNumber(phoneNumber) {
    const part1 = phoneNumber.slice(0, 6)
    const part2 = "***"
    const part3 = phoneNumber.slice(9)
    return part3 + part2 + part1
}
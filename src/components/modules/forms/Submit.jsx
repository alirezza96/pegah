export default function Submit(rest) {
    return (
        <input
            {...rest}
            type="submit"
            value={rest.disabled ? "چند لحظه صبر کنید..." : rest.value}
            className="bg-text text-primary rounded-3xl w-full my-1 p-1 cursor-pointer disabled:cursor-not-allowed"
        />
    )
}
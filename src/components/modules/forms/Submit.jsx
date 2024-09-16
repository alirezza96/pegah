export default function Submit(rest) {
    return (
        <input
            {...rest}
            type="submit"
            className="bg-text text-primary rounded-3xl w-full my-1 p-1 cursor-pointer"
        />
    )
}
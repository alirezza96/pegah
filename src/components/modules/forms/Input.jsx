export default function Input(rest) {
    return (
        <>
            <label
                htmlFor={rest.id}
                className="font-secondary"
            >
                {rest.label}
            </label>
            <br />
            <input
    
                {...rest}
                className="text-ltr p-1 my-1 rounded-md  focus:outline-secondary"
            />
        </>
    )
}
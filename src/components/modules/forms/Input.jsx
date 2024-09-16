export default function Input({ className, ...rest }) {
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
                className={`text-ltr p-1 my-1 rounded-md placeholder-border  focus:outline-text ${className}`}
            />
        </>
    )
}
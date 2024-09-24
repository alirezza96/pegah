export default function Notification({ title, status }) {
    const statuses = {
        success: "bg-success/40 "
        , info: "bg-info/40 "
        , error: "bg-error/40"
        , warning: "bg-warning/40"
    }
    return (
            <p className={` rounded-3xl px-3 text-sm font-bold mt-1 ${statuses[status]}`}>
                {title}
            </p>
    )
}
export default function Notification({ title, status }) {
    const statuses = {
        success: "bg-success/10 text-success"
        , info: "bg-info/10 text-info"
        , error: "bg-error/10 text-error"
        , warning: "bg-warning/10 text-warning"
    }
    return (
        <p className={`${statuses[status]} rounded-lg px-3 text-sm font-bold mt-1`}>
            {title}
        </p>
    )
}
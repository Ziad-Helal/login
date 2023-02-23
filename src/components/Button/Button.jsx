export default function Button({
    children = "Button",
    type = "button",
    className = "",
    onClick = () => {},
}) {
    return (
        <button
            type={type}
            className={`text-white bg-primary_2 hover:bg-primary_1 text-xl font-medium rounded-xl py-2 px-16 transition ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

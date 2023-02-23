export default function InputField({
    id = "",
    type = "text",
    label = "Label",
    name = "",
    placeholder = "",
    required = false,
    autoFocus = false,
    autoComplete = "on",
    onChange = () => {},
}) {
    return (
        <div className="relative w-4/6 mx-auto mt-8">
            <label
                htmlFor={id}
                className="text-sm font-medium bg-white absolute left-1 -top-2.5 px-1"
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                className="text-lg font-light border border-secondary_3 rounded-xl w-full px-5 py-3"
                autoComplete={autoComplete}
                required={required}
                autoFocus={autoFocus}
                onChange={onChange}
            />
        </div>
    );
}

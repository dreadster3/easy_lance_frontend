interface IFormInputProps {
    label: string;
    type?: string;
    placeholder?: string;
    value: string;
    setValue: (value: string) => void;
}

function FormInput({
    label,
    placeholder,
    type,
    value,
    setValue,
}: IFormInputProps) {
    return (
        <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <input
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type={type ?? 'text'}
                    placeholder={placeholder ?? label}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </div>
    );
}

export default FormInput;

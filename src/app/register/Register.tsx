import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../components/FormInput';
import useRegister from '../../hooks/useRegister';

function Register() {
    const navigate = useNavigate();
    const { register } = useRegister();
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        register(
            { username, email, password },
            {
                onSuccess: () => {
                    console.log('Success');
                    navigate('/login');
                },
            },
        );
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    src={'/logo512.png'}
                    className="mx-auto h-10 w-auto"
                    alt="easy-lance"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign up your account
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <FormInput
                        label="Email"
                        type="email"
                        value={email}
                        setValue={setEmail}
                    />
                    <FormInput
                        label="Username"
                        value={username}
                        setValue={setUsername}
                    />
                    <FormInput
                        label="Password"
                        type="password"
                        value={password}
                        setValue={setPassword}
                    />
                    <div>
                        <button
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            type="submit"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;

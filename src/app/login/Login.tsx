import { useState } from 'react';
import useLogin from '../../hooks/useLogin';
import { useAuth } from '../../providers/AuthProvider';

function Login() {
    const { setToken } = useAuth();
    const { login } = useLogin();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login(
            { username, password },
            {
                onSuccess: (token) => {
                    setToken(token);
                },
            },
        );
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;

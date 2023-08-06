import { useMutation } from 'react-query';
import { authClient } from '../clients';

interface ILoginParams {
    username: string;
    password: string;
}

function useLogin() {
    const { mutate, isLoading } = useMutation(
        'login',
        ({ username, password }: ILoginParams) =>
            authClient.login_async(username, password),
        {},
    );

    return { login: mutate, isLoading };
}

export default useLogin;

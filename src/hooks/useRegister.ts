import { useMutation } from 'react-query';
import { authClient } from '../clients';

interface IRegisterParams {
    email: string;
    username: string;
    password: string;
}

function useRegister() {
    const { mutate, isLoading } = useMutation(
        'login',
        ({ username, email, password }: IRegisterParams) =>
            authClient.register_async(username, email, password),
        {},
    );

    return { register: mutate, isLoading };
}

export default useRegister;

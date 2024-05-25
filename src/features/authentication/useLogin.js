import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (user) => {
            localStorage.setItem('accessToken', user.session.access_token)
            localStorage.setItem('email', user.user.email)
            const userEmail = user.user.email;
            queryClient.setQueryData(['user'], user.user);
            if (userEmail === 'admin@gmail.com') {
                navigate('/dashboard', { replace: true });
            } else {
                navigate('/home', { replace: true });
            }
        },
        onError: (err) => {
            console.log('ERROR', err);
            toast.error('Provided email or password are incorrect');
        },
    });

    return { login, isLoading };
}

import { TOKEN_KEY } from '@app/store/auth/auth.constants';
import { User } from '@app/store/auth/auth.constants';

export const getToken = (): User['token'] => {
    return (sessionStorage.getItem(TOKEN_KEY));
};

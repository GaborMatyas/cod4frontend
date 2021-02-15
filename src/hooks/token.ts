import { useState } from 'react';

import { Token } from '@components/vote-summary/types';
import { TOKEN_KEY } from '@store/auth/constants';
import { User } from '@store/auth/constants';

export const getToken = (): User['token'] => {
    return (sessionStorage.getItem(TOKEN_KEY) as User['token']);
};

export default function useToken() {
    const [token, setToken] = useState(getToken());

    const saveToken = (userToken: Token) => {
        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token
    }
}

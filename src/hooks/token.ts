import { useState } from 'react';

import { Token } from '@components/vote-summary/types';
import { TOKEN_KEY } from '@store/auth/constants';

export default function useToken() {
    const getToken = () => {
        return sessionStorage.getItem(TOKEN_KEY);
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken: Token) => {
        // sessionStorage.setItem(TOKEN_KEY, userToken);
        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token
    }
}

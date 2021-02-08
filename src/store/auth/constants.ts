export const routeForLogin: string = "http://localhost:5000/login";
export const routeForRegistration: string = "http://localhost:5000/register";

export type User = {
    id: number;
    nickName: string;
    avatarURL?: string;
    token: null | string;
};

export const TOKEN_KEY = 'token';

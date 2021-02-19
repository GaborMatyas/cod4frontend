import { Token } from '@components/vote-summary/types';

export const routeForLogin: string = "http://localhost:5000/login";
export const routeForLogout: string = "http://localhost:5000/logout";
export const routeForRegistration: string = "http://localhost:5000/register";

export type User = {
    id: number;
    nickName: string;
    avatarURL?: string;
    token: null | Token;
    role: Roles;
};

export enum Roles {
    Admin = 'admin',
    Member = 'member',
    Visitor = 'visitor'
}

export const TOKEN_KEY = 'token';
export const ROLE_KEY = 'role';

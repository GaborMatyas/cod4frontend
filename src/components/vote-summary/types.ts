export interface Vote {
    date: string;
    members: Array<UserWithAvatar>;
}

export interface UserWithAvatar {
    username: string;
    avatarURL: string;
}
export interface Votes {
    votes: Array<Vote>;
}

export type Token = string; 

export interface UserCridentials {
    email: string;
    password: string;
    route: string;
}

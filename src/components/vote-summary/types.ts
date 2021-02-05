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

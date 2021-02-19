import { Token } from '@components/vote-summary/types';

type VoteObjectBody = {
    id: number,
    dates: string[]
}

export type VoteObject = {
    token: Token,
    body: VoteObjectBody
};

export type ResetVoteObject = {
    token: Token,
    body: {
        userId: string
    }
}
  
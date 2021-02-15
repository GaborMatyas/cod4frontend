import { Vote } from '@components/vote-summary/types'
export interface votesInitialStateInterface {
    status: 'loading' | 'failed' | 'fetched' | 'fetch';
    votes: Array<Vote>;
    voteSnapshotToVerifyChanges: Array<Array<string>> | null;
}

export const votesInitialState: votesInitialStateInterface = {
    status: 'fetch',
    votes: [
        {
            date: 'H' ,
            members: []
        },
        {
            date: 'K' ,
            members: []
        },
        {
            date: 'Sze',
            members: []
        },
        {
            date: 'CS',
            members: []
        },
        {
            date: 'P',
            members: []
        },
        {
            date:  'Szo',
            members: []
        },
        {
            date: 'V',
            members: []
        }
    ],
    voteSnapshotToVerifyChanges: null  
}

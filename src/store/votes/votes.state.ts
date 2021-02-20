import { Vote } from '@components/vote-summary/types'

export interface votesInitialStateInterface {
    votes: Array<Vote>;
    voteSnapshotToVerifyChanges: Array<Array<string>> | null;
}

export const votesInitialState: votesInitialStateInterface = {
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

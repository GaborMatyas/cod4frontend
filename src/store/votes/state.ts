import { Vote, Votes } from '@components/vote-summary/types'

export interface votesInitialStateInterface {
    status: 'loading' | 'failed' | 'fetched' | 'fetch';
    votes: Array<Vote>;
}

export const votesInitialState: votesInitialStateInterface = {
    status: 'fetch',
    votes: [
        {
            date: "H" ,
            members: []
        },
        {
            date: "K" ,
            members: []
        },
        {
            date: "Sze",
            members: []
        },
        {
            date: "CS",
            members: []
        },
        {
            date: "P",
            members: []
        },
        {
            date:  "Szo",
            members: []
        },
        {
            date: "V",
            members: []
        }
    ]   
}

export const fetchedVotes: Votes  = {
    votes: [
        {
            date: "H" ,
            members: [
                "Mortimer",
                "Ply",
                "Gufi",
                "Melkor"
            ]
        },
        {
            date: "K" ,
            members: [
                "Mortimer",
                "Ply"
            ]
        },
        {
            date: "Sze",
            members:  [
                "Mortimer",
                "Ply",
                "Gufi"
            ]
        },
        {
            date: "CS",
            members: [
                "Mortimer",
                "Ply",
                "Gufi",
                "Melkor",
                "Covid19",
                "Dori"
            ]
        },
        {
            date: "P",
            members:  [
                "Mortimer",
                "Ply",
                "Gufi",
                "Melkor",
                "Covid19",
            ]
        },
        {
            date:  "Szo",
            members: [
                    "Mortimer",
                    "Ply",
                    "Gufi",
                    "Teabor"
                ]
        },
        {
            date: "V",
            members: [
                "Mortimer",
                "Ply",
                "Gufi",
                "Melkor",
                "Covid19"
            ]
        }
    ]
};   
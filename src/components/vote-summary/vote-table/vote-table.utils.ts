import { Vote  } from '@components/vote-summary/types';

export const calculateWinner = (votesArray: Array<Vote>) => {
    const lengths = votesArray.map((vote) => vote.members.length);
    return Math.max(...lengths);
};

export const whichMembersVotedThisWeek = (votesArray: Array<Vote>): Array<string> => {
    const allVoterArrays = votesArray.map(vote => vote.members.map(member=>member.username));
    const mergedArraysValues = [].concat.apply([], allVoterArrays);
    const set = new Set(mergedArraysValues);
    return Array.from(set) as Array<string>;
};

// export const whichMembersDidntVotedForThatDay = (allMembersWhoVotedThisWeek: Array<string>, thisDayIsOkForTheseMembers: Vote) => (
//     allMembersWhoVotedThisWeek.filter(member => !thisDayIsOkForTheseMembers.includes(member)));

export const calculateProgressBar = (mostVotes: number, currentVotes: number) => {
    return parseFloat((currentVotes/mostVotes).toFixed(2))*100;
};

export const isVotesStateChanged = (currentVotesThisDayAlphabaticalOrder: Array<Array<string>>, snapshotVotes: Array<Array<string>>) => {
    console.log('snapshotVotes', snapshotVotes);
    console.log('currentVotesThisDayAlphabaticalOrder', currentVotesThisDayAlphabaticalOrder);
    if (snapshotVotes.length !== currentVotesThisDayAlphabaticalOrder.length) return false;
    if (snapshotVotes == null || currentVotesThisDayAlphabaticalOrder == null) return false;
    
    for (let date = 0; date < snapshotVotes.length; date++) {
        if (snapshotVotes[date].length !== currentVotesThisDayAlphabaticalOrder[date].length) return false;
        if (snapshotVotes[date] == null || currentVotesThisDayAlphabaticalOrder[date] == null) return false;

        for (let member = 0; member < snapshotVotes[date].length; member++) {
            if (snapshotVotes[date][member] !== currentVotesThisDayAlphabaticalOrder[date][member]) return false;
        }
    }
    return true;
}

export const takeSnapshotFromVotesAlphabeticalOrder = (votes: Vote[]) => {
    const snapshotArray: string[][] = [];
    votes.forEach(vote => {
        snapshotArray.push(vote.members.map(member => member.username).sort((a, b) => a === b ? 0 : a < b ? -1 : 1));
    });
    return snapshotArray;
};

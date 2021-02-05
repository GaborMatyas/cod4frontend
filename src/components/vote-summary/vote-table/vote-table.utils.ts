import { Vote  } from '@components/vote-summary/types';

export const calculateWinner = (votesArray: Array<Vote>) => {
    const lengths = votesArray.map((vote) => vote.members.length);
    return Math.max(...lengths);
}

export const whichMembersVoted = (votesArray: Array<Vote>): Array<string> => {
    const allVoterArrays = votesArray.map(vote => vote.members.map(member=>member.username));
    var mergedArraysValues = [].concat.apply([], allVoterArrays);
    const set = new Set(mergedArraysValues);
    return Array.from(set) as Array<string>;
}

// export const whichMembersDidntVotedForThatDay = (allMembersWhoVotedThisWeek: Array<string>, thisDayIsOkForTheseMembers: Vote) => (
//     allMembersWhoVotedThisWeek.filter(member => !thisDayIsOkForTheseMembers.includes(member)));

export const calculateProgressBar = (mostVotes: number, currentVotes: number) => {
    return parseFloat((currentVotes/mostVotes).toFixed(2))*100;
}

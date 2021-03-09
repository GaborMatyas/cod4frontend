import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchVotesThunk } from '@store/votes/votes.thunk';
import Header from '@app/components/header/header';
import VoteTable from '@components/vote-summary/vote-table/vote-table';
import { selectVoteState } from '@store/votes/votes.selectors';
import { selectUserState } from '@store/auth/auth.selectors';
// import { Roles } from '@app/store/auth/auth.constants';
// import { getToken } from '@store/auth/auth.utils';
// import { ResetVoteObject } from '@store/votes/votes.model';
import './vote-summary.page.scss'

const VoteSummary = () => {
    const dispatch = useDispatch();
    const votes = useSelector(selectVoteState);
    // const currentUser = useSelector(selectUserState);

    useEffect(() => {
        dispatch(fetchVotesThunk());
    }, [dispatch]);

    // const objectForSendingReset: ResetVoteObject = {
    //     token: getToken(),
    //     body: {
    //         userId: currentUser.id.toString()
    //     }
    // }

    // const resetAllVoteFromSummaryThisWeek = (objectForSendingReset: ResetVoteObject) => {
    //     dispatch(resetVotesThunk(objectForSendingReset));
    // }

    return (
        <>
            <div className="votepage-background-picture">
                <div className="background-gradient">
                    <Header />
                    <VoteTable votes={votes.votes} />
                </div>
            </div>
        </>
    )
}

export default VoteSummary;

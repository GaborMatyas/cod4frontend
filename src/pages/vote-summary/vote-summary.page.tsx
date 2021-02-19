import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchVotesThunk, resetVotesThunk } from '@store/votes/votes.thunk';
import Header from '@app/components/header/header';
import VoteTable from '@components/vote-summary/vote-table/vote-table';
import { selectVoteState, selectVotesStatus } from '@store/votes/votes.selectors';
import { selectUserState } from '@store/auth/auth.selectors';
import { Roles } from '@store/auth/constants';
import { getToken } from '@hooks/token';
import { ResetVoteObject } from '@store/votes/votes.model';

const VoteSummary = () => {
    const dispatch = useDispatch();
    const votesStatus = useSelector(selectVotesStatus);
    const votes = useSelector(selectVoteState);
    const currentUser = useSelector(selectUserState);

    useEffect(() => {
        if (votesStatus === 'fetch') {
            dispatch(fetchVotesThunk());
        }
    }, [votesStatus, dispatch]);

    const objectForSendingReset: ResetVoteObject = {
        token: getToken(),
        body: {
            userId: currentUser.id.toString()
        }
    }

    const resetAllVoteFromSummaryThisWeek = (objectForSendingReset: ResetVoteObject) => {
        dispatch(resetVotesThunk(objectForSendingReset));
    }

    return (
        <>
            <Header />
            <VoteTable votes={votes.votes} />
            { currentUser.role === Roles.Admin &&
                <button
                    className='vote-table-reset-button'
                    onClick={() => resetAllVoteFromSummaryThisWeek(objectForSendingReset)} >Teljes törlés
                </button>
            }
        </>
    )
}

export default VoteSummary;

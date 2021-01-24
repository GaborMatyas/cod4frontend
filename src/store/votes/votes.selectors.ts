import { RootState } from '../root.reducer';
import { votes } from '../../components/vote-summary/types';

export const selectVoteState = (state: RootState): votes => state.votes;

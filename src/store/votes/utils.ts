// import { Vote } from '@components/vote-summary/types';
import { Vote } from '../../components/vote-summary/types'

export const fetchVotes = async(url: string): Promise<Array<Vote>> => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return([...json.votes]);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }    
}

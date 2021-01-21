export const getVotes = async(setVotes: React.Dispatch<React.SetStateAction<any[]>>, url: string) => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log("json.votes", json.votes instanceof Array, json.votes);
        setVotes([...json.votes]);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }    
}

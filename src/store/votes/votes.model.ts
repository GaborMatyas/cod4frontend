type VoteObjectBody = {
    id: number,
    dates: string[]
}

export type VoteObject = {
    token: string,
    body: VoteObjectBody
};
  
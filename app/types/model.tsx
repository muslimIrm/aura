export type AllModel = {
    id: string;
    name: string;
    description: string;
    context_length: number;
    pricing: {
        prompt: number;
        completion: number;
    }

}

export type SmrtestModel = {
    rank: number,
    model: string,
    vendor: string,
    score: number
}
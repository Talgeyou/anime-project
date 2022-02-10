export type CharacterDetailsType = {
    id: number;
    name: {
        first?: string;
        middle?: string;
        last?: string;
        full: string;
        native?: string;
    };
    image?: {
        large?: string;
        medium?: string;
    };
    description: string;
    gender?: string;
    dateOfBirth?: {
        year?: number;
        month?: number;
        day?: number;
    };
    age?: number;
    bloodType?: string;
};

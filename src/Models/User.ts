export interface User {
    id: number;
    profile: string;
    name: string;
    age: number;
    gender: string;
}

export interface UsersList extends Array<User>{}
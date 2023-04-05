  export interface User {

    email: string;
    username: string;

}

export const COUNTRIES: User[] = [
    { email: 'user1@email.com', username: 'user1' },
    { email: 'user2@email.com', username: 'user2' }
]

export interface tableArray {
  option1: string;
  option2: string;
  option3: string;
}
export const array101: tableArray[] = [
{
  option1: "UPRR",
  option2: "Logistics",
  option3: "Done",
},
{
  option1: "T-Mobile",
  option2: "T-Mobile",
  option3: "In Progress",
}
]
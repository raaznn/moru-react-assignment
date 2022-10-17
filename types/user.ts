export interface User {
  id: number;
  isFavorite: boolean;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export type UserContext = {
  userList: User[];
  updateUser: (user: User) => void;
  deleteUser: (id: number) => void;
  toggleFavorite: (id: number) => void;
  isLoading: boolean;
};

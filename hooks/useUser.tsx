import {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
  useEffect,
} from "react";

// types
import {
  UserContext as UserContextType,
  User as UserType,
} from "../types/user";

const URL = "https://jsonplaceholder.typicode.com/users";

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([] as UserType[]);

  // fetch users list
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          setUsers(data.map((u: UserType) => ({ ...u, isFavorite: false })));
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          setIsLoading(false);
        });
    })();
  }, []);

  // edit user
  const updateUser = (user: UserType) => {
    setUsers((users) => users.map((u) => (u.id === user.id ? user : u)));
  };

  // delete user
  const deleteUser = (id: number) => {
    setUsers((users) => users.filter((u) => u.id !== id));
  };

  // change favorite state
  const toggleFavorite = (id: number) => {
    setUsers((users) =>
      users.map((u) => (u.id === id ? { ...u, isFavorite: !u.isFavorite } : u))
    );
  };

  return (
    <UserContext.Provider
      value={{
        userList: users,
        updateUser,
        deleteUser,
        toggleFavorite,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export default useUser;

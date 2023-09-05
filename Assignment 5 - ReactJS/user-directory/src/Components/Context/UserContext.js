import { useState, createContext } from "react";

const SelectedUserContext = createContext();

const SelectedUserProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");

  return (
    <SelectedUserContext.Provider
      value={{ selectedUser, setSelectedUser, search, setSearch }}
    >
      {children}
    </SelectedUserContext.Provider>
  );
};

export { SelectedUserContext, SelectedUserProvider };

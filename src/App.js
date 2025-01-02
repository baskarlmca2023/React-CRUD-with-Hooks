import React, { useState } from "react";
import AddUserForm from "./forms/AddUserForm";
import UserTable from "./tables/UserTable";
import EditUserForm from "./forms/EditUserForm";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./App.css"; // Custom CSS

function App() {
  const usersData = [
    { id: 1, name: "Baskar", username: "baskar" },
  
  ];

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setEditing(false);
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">CRUD App with Hooks</h1>
      <div className="row">
        <div className="col-md-6">
          {editing ? (
            <div className="card shadow p-3 mb-4">
              <h2 className="text-center">Edit User</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div className="card shadow p-3 mb-4">
              <h2 className="text-center">Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="col-md-6">
          <div className="card shadow p-3">
            <h2 className="text-center mb-4">View Users</h2>
            <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

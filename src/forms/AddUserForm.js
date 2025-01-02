import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
      className="p-3 border rounded bg-light shadow"
    >
      <h4 className="text-center mb-3">Add New User</h4>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          onChange={handleInputChange}
          name="name"
          value={user.name}
          className="form-control"
          placeholder="Enter name"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          type="text"
          onChange={handleInputChange}
          name="username"
          value={user.username}
          className="form-control"
          placeholder="Enter username"
        />
      </div>
      <button className="btn btn-primary">Add New User</button>
    </form>
  );
};

export default AddUserForm;

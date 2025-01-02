import React, { useEffect, useState } from "react";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.updateUser(user.id, user);
      }}
      className="p-3 border rounded bg-light shadow"
    >
      <h4 className="text-center mb-3">Edit User</h4>
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
      <div className="d-flex justify-content-between">
        <button className="btn btn-success">Update User</button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => props.setEditing(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditUserForm;

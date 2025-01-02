import React from "react";

const UserTable = (props) => (
  <table className="table table-striped table-hover">
    <thead className="table-dark">
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className="btn btn-warning btn-sm me-2"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3} className="text-center">
            No users
          </td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;

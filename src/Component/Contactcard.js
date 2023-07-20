import React from 'react';
import user from './about.jpg';
import { Link } from 'react-router-dom';

function ContactCard(props) {
  const { id, name, email } = props.cont;

  const handleDelete = (id) => {
    props.delete(id);
  };

  const handleEdit = (id) => {
    props.edit(id);
  };

  return (
    <div className="p-4 container-fluid" key={id}>
      <div className="card">
        <div className="card-body d-flex flex-wrap align-items-center">
          <span className="avatar me-3">
            <img className="avatar-img" src={user} alt="User" />
          </span>
          <div className="flex-grow-1 d-flex flex-column justify-content-center">
            <div className="d-inline-flex align-items-center mb-2">
              <h5 className="m-0 me-1">Name:</h5>
              <span>{name}</span>
            </div>
            <div className="d-inline-flex align-items-center">
              <h5 className="m-0 me-1">Email:</h5>
              <span>{email}</span>
            </div>
          </div>
          <div className="d-flex align-items-center mt-2 mt-sm-0">
            <Link to="/" className="me-2">
              <button
                onClick={() => handleEdit(id)}
                type="button"
                className="btn btn-primary w-100"
              >
                Edit
              </button>
            </Link>
            <button
              onClick={() => handleDelete(id)}
              type="button"
              className="btn btn-danger w-100"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;

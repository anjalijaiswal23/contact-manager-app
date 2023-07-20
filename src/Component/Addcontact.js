import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddContact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [showAlert, setShowAlert] = useState(false);

  const { editData } = props;
  console.log("fake", editData);

  // Set the name and email values based on editData
  useState(() => {
    if (editData) {
    
      setName(editData.name);
      setEmail(editData.email);
    }
  }, [editData]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("Fill in all the details first");
    } else {
      props.addContactHandler({ name, email });
      console.log("edit", props.editData);
      setShowAlert(true);
      setName("");
      setEmail("");
      setTimeout(() => {
        setShowAlert(false);
      }, 1500);
    }
  };

  const canSubmit = name !== "" && email !== "";

  return (
    <div className='container p-4'>
      <h1>Add contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <button type="submit" className="btn btn-success mr-4" disabled={!canSubmit}>Add</button>
        <Link to="/add" className="btn btn-primary m-4">Contact List</Link>
      </form>

      {showAlert && (
        <div className="alert alert-success mt-4" role="alert">
          Successfully added!
        </div>
      )}
    </div>
  );
}

export default AddContact;

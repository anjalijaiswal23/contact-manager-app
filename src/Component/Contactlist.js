import React from 'react';
import ContactCard from './Contactcard';
import { Link } from 'react-router-dom';

function ContactList(props) {
  const renderContacts = props.contacts.map((cont) => {
    return (
      <ContactCard
        cont={cont}
        key={cont.id}
        delete={props.deleteContactHandler}
        edit={props.edit}
      />
    );
  });

  return (
    <div className="container ">
      <h1>Contact List</h1>
      <Link to="/">
        <button type="submit" className="btn btn-primary mb-3">
          Add
        </button>
      </Link>
      {renderContacts}
    </div>
  );
}

export default ContactList;

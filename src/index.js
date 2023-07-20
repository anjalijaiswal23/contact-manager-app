import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App';
import AddContact from './Component/Addcontact';
import ContactList from './Component/Contactlist';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function RootComponent() {
  const LOCAL_STRG_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [id, setId] = useState(0);
  const [editData, setEditData] = useState(null);

  const addContactHandler = (contact) => {
    if (editData) {
      const updatedContacts = contacts.map((c) => (c.id === editData.id ? { id: editData.id, ...contact } : c));
      setContacts(updatedContacts);
      setEditData(null);
      console.log(editData.id + " edited data");
    } else {
      setContacts([...contacts, { id, ...contact }]);
      setId(id + 1);
    }
  };


  useEffect(() => {
    const retrieve = JSON.parse(localStorage.getItem(LOCAL_STRG_KEY));
    if (retrieve) {
      setContacts(retrieve);
      const latestId = retrieve[retrieve.length - 1]?.id;
      setId(latestId ? latestId + 1 : 0);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STRG_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const deleteContactHandler = (id) => {
    for(let i=0;i<contacts.length;i++)
    {
    console.log("deleted data : "+ contacts[i].id);
    }
    const updatedContacts = contacts.filter((contact) => contact.id !== id);

    setContacts(updatedContacts);
  };

  const editContactHandler = (id) => {
    const contactToEdit = contacts.find((contact) => contact.id === id);
    if (contactToEdit) {
      setEditData({ id:id, name: contactToEdit.name, email: contactToEdit.email });
    }
  };



  return (
    <Router>
      <App />
      <Routes>
        <Route
          path="/"
          element={<AddContact addContactHandler={addContactHandler} editData={editData} />}
        />
        <Route
          path="/add"
          element={
            <ContactList
              contacts={contacts}
              deleteContactHandler={deleteContactHandler}
              edit={editContactHandler}
            />
          }
        />
      </Routes>
    </Router>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<RootComponent />, rootElement);

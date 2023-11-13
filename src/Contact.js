import React from 'react';
import { Link, Route, Routes, Outlet, useParams } from 'react-router-dom';
import './ContactStyles.css';

const Contacts = () => {
  return (
    <div>
      <h1>Welcome to Contact Page</h1>
      <h4>Select contact Id</h4>
      <ul className="contacts">
        <li>
          <Link to="1">Contacts 1</Link>
        </li>
        <li>
          <Link to="2">Contacts 2</Link>
        </li>
        <li>
          <Link to="3">Contacts 3</Link>
        </li>
        <li>
          <Link to="4">Contacts 4</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

const Contact = () => {
  let { id } = useParams();

  return <p>{id}</p>;
};

export default function ContactPage() {
  return (
    <Routes>
      <Route path="/" element={<Contacts />}>
        <Route path=":id" element={<Contact />} />
      </Route>
    </Routes>
  );
}

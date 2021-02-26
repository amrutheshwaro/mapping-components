import React from "react";
import Card from "./Card";
import contacts from "../contacts";

var createCard = function (contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      id={contact.id}
      phone={contact.phone}
      email={contact.email}
    />
  );
};

var App = function () {
  for (const contact of contacts) {
    return <div>{contacts.map(createCard)}</div>;
  }
};

export default App;

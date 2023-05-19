import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="data:image/png;base64,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" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;

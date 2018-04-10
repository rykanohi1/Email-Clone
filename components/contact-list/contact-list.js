import React from 'react';
import LeftRightLayout from '../layout/left-right-layout/left-right-layout';
import ActionButton from '../action-button/action-button';

export default ({contacts}) => {
return (
  <div className="contact-list">
    {contacts.map(contact => (
      <LeftRightLayout
        className="contact"
        children={() => [
          <ActionButton
            className="contact-profile"
            imgSrc={contact.imgSrc}
            title={contact.address}
            label={contact.username}
            action={() => alert("history unavailable")}
          />,
          <ActionButton
            className="contact-viewer"
            imgSrc="https://png.icons8.com/metro/1600/contacts.png"
            action={() => alert("profile unavailable")}
          />
        ]}
      />
    ))}
  </div>
)}
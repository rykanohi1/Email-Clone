import React from 'react';
import LeftRightLayout from '../layout/left-right-layout/left-right-layout';
import ActionButton from '../action-button/action-button';

export default ({contacts}) => {
return ( 
    <div className="contact-list">
        {contacts.map(contact => <LeftRightLayout className='contact'
                                                    children={() => [
                                                        <ActionButton imgSrc={contact.imgSrc} 
                                                                      title={contact.username} 
                                                                      label={contact.address}
                                                                      action={alert('history unavailable')}/>,
                                                        <ActionButton imgSrc='https://png.icons8.com/metro/1600/contacts.png'
                                                                      action={alert('profile unavailable')}/>
                                                    ]}/>
        )}
    </div>
)}
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-notifications/lib/notifications.css';
import './style.css';
import {NotificationContainer} from 'react-notifications';
import Login from './Login';
import Chat from './Chat';

const App = () => {
  const [user, setUser] = useState(null);
  const renderApp = () => {
    if (user) {
      return <Chat user={user} />;
    } else {
      return <Login setUser={setUser} />;
    }
  };
  return (
    <div className='container'>

      {renderApp()}
    </div>
  );
};
export default App;

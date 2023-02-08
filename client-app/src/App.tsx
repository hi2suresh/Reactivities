import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import List from 'semantic-ui-react/dist/commonjs/elements/List';

function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then((response) => {
      console.log(response.data);
      setActivities(response.data);
    });
  }, []);
  return (
    <div>
      <Header as="h2" icon="users" content="Reactivities"></Header>
        <List>
          {activities.map((activity: any) => (
            <li key={activity.id}>{activity.title}</li>
          ))}
        </List>
    </div>
  );
}

export default App;

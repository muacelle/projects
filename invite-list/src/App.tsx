import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List'

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
    
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Tom Wambsgans',
      url: 'https://static.wikia.nocookie.net/succession/images/4/4b/Tom_Wamsgans.png',
      age: 43,
      note: 'Knows nice restaurants'
    }
  ])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <Form people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
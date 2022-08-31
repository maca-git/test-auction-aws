import { useEffect, useState } from 'react';
import Amplify, { API } from "aws-amplify";
import awsconfig from './aws-exports'
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react'
import { listLots } from './graphql/queries';

import '@aws-amplify/ui-react/styles.css';
import './App.css';

Amplify.configure(awsconfig)

function App() {
  const [lots, setLots] = useState([])

  const fetchLots = async () => {
    try {
      const { data } = await API.graphql({ query: listLots, authMode: "API_KEY" })
      setLots(data.listLots.items);
    } catch(e) {
      console.log(e);
    }
  }
  
  useEffect(() => {
    fetchLots()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
      </header>
      {
        lots?.map((lot) => (
          <>
            <div>{lot.title}</div>
            <div>{lot.description}</div>
            <div>{lot.currentPrice}</div>
            <img src={lot.imageUrl} alt="" style={{width: '100px'}}/>
          </>
        ))
      }
    </div>
  );
}

export default withAuthenticator(App);

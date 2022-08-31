import './App.css';
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react'

import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig)

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
      </header>
    </div>
  );
}

export default withAuthenticator(App);

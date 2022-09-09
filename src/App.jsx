import React from 'react'
import Amplify from 'aws-amplify'
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react'
import awsconfig from './aws-exports'

import { AppRouter } from './components/AppRouter'

import '@aws-amplify/ui-react/styles.css'
import './App.css'

Amplify.configure(awsconfig)

function App() {
  return (
    <div className="App">
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <AppRouter />
          </main>
        )}
      </Authenticator>
    </div>
  )
}

export default withAuthenticator(App)

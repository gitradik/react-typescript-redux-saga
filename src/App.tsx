import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styles from './App.module.scss'
import { Login, Registration, Dashboard } from 'pages/index'

type ContextProps = {
  lang: string
  theme: string
}

export const AppContext = React.createContext<Partial<ContextProps>>({})

const App = () => {
  return (
    <AppContext.Provider value={{ lang: 'ru' }}>
      <div className={styles.app} id="app">
        <Router>
          <React.Fragment>
            <ul>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/sign-in">Sign in</Link>
              </li>
              <li>
                <Link to="/sign-up">Sign up</Link>
              </li>
            </ul>
            <Switch>
              <Route exac={true} path="/">
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/sign-in">
                  <Login />
                </Route>
                <Route path="/sign-up">
                  <Registration />
                </Route>
              </Route>
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    </AppContext.Provider>
  )
}

export default App

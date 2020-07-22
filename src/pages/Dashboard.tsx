import React from 'react'
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux'
import { Types as ChatTypes, Message } from '../store/chat/types'
import { Topic } from 'pages/index'
import { RootStateType } from '../store'
import { AppContext } from '../App'

const mapState = (state: RootStateType) => ({
  messages: state.chat.messages,
})

const mapDispatch = {
  sendMessage: (msg: Message) => ({ type: ChatTypes.CHAT_SEND_MESSAGE, payload: msg }),
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

const Dashboard = (props: Props) => {
  const { path, url } = useRouteMatch()

  const onClickSendMessage = () => {
    const msg: Message = {
      user: 'user',
      timestamp: 20,
      message: 'new message',
    }

    props.sendMessage(msg)
  }

  const getMessages = () =>
    props.messages.length
      ? props.messages.map((msg: Message, i: number) => (
          <div key={`Dashboard_msg_${i}`} className="msg">
            <span>{msg.user}</span>
            <span>{msg.message}</span>
            <span>{msg.timestamp}</span>
          </div>
        ))
      : 'not messages'

  const getLangElm = (lang?: string): JSX.Element => {
    let val
    switch (lang) {
      case 'ru':
        val = 'Russian'
        break
      default:
        val = 'English'
        break
    }
    return <span>"{val}"</span>
  }

  return (
    <AppContext.Consumer>
      {({ lang }) => {
        return (
          <div className="page">
            <h1>Dashboard {getLangElm(lang)}</h1>
            <ul>
              <li>
                <Link to={`${url}/rendering`}>Rendering with React</Link>
              </li>
              <li>
                <Link to={`${url}/components`}>Components</Link>
              </li>
              <li>
                <Link to={`${url}/props-v-state`}>Props v. State</Link>
              </li>
            </ul>
            <Switch>
              <Route exact={true} path={path}>
                <h3>Please select a topic.</h3>
              </Route>
              <Route path={`${path}/:topicId`}>
                <Topic />
              </Route>
            </Switch>
            <div className="msg-wrap">{getMessages()}</div>
            <button onClick={onClickSendMessage}>send</button>
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}

export default connector(Dashboard)

import React from 'react'
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux'
import { Types as ChatTypes, Message } from '../store/chat/types'
import { Topic } from 'pages/index'
import { RootStateType } from '../store'

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
    Array.isArray(props.messages)
      ? props.messages.map((msg: Message, i: number) => i + 1 + '. ' + msg.message)
      : 'not messages'

  return (
    <div className="page">
      Dashboard
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
      <div style={{ marginTop: '30px', marginBottom: '30px' }}>{getMessages()}</div>
      <button onClick={onClickSendMessage}>send</button>
    </div>
  )
}

export default connector(Dashboard)

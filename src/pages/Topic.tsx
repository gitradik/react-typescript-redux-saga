import React from 'react'
import { useParams } from 'react-router-dom'

interface TopicColor {
  id: number
  color: string
}

const Topic = () => {
  const { topicId } = useParams()
  const colors: TopicColor[] = [
    {
      id: 1,
      color: 'black',
    },
    {
      id: 2,
      color: 'red',
    },
    {
      id: 3,
      color: 'green',
    },
  ]

  function getColorByTopicId() {
    const color = colors.find((c) => c.id === +topicId)
    return color ? color.color : colors[0].color
  }

  return (
    <div>
      <h3>Topic id: {topicId}</h3>
      <h2>Color: {getColorByTopicId()}</h2>
    </div>
  )
}

export default Topic

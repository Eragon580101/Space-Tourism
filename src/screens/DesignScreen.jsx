import React from 'react'
import Colors from '../components/Colors'
import InteractiveElements from '../components/InteractiveElements'
import Typography from '../components/Typography'

const DesignScreen = () => {
  return (
    <div className="container">
        <Colors></Colors>
        <Typography></Typography>
        <InteractiveElements></InteractiveElements>
    </div>
  )
}

export default DesignScreen
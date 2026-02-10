import React, { useState, useEffect } from 'react'

const DateTime = () => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      
      const day = days[now.getDay()]
      const month = months[now.getMonth()]
      const date = now.getDate()
      let hours = now.getHours()
      const minutes = now.getMinutes()
      const ampm = hours >= 12 ? 'PM' : 'AM'
      
      hours = hours % 12
      hours = hours ? hours : 12
      
      const formatted = `${day} ${month} ${date} ${hours}:${minutes.toString().padStart(2, '0')}${ampm}`
      setDateTime(formatted)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>{dateTime}</div>
  )
}

export default DateTime
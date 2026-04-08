import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const url = 'http://127.0.0.1:8000'
  const [message, setMessage] = useState('Connecting...')

  useEffect(() => {
    axios.get(`${url}/health`)
      .then(res => setMessage(res.data.status))
      .catch(err => setMessage(`Connection Failed: ${err.message}`))
  }, [])

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-blue-600">{message}</h1>
    </div>
  )
}

export default App
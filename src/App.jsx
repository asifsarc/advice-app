import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {
  const [advice, setAdvice] = useState("")
  const [loading, setLoading] = useState(true)

  const getAdvice = () => {
    axios.get("https://api.adviceslip.com/advice")
    .then(res => setAdvice(res.data.slip.advice))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }
  useEffect(() => {
    getAdvice()
  }, [])

  

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      {loading ? <p>Thinking...</p> : <h1 className="italic font-semibold text-2xl">"{advice}"</h1>}
      <button onClick={getAdvice} className="btn btn-dash btn-warning" >Give me Advice</button>
    </div>
  )
}

export default App

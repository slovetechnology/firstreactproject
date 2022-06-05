import Foods from './Foods'
import {useState, useEffect} from 'react'

const Home = () => {
  const [foods, setFoods] = useState([])
  useEffect(() => {
    const getfoods = async () => {
      const res = await fetchFoods()
      setFoods(res)
    }
    getfoods()
  })
  const fetchFoods = async () => {
    const res = await fetch(`http://localhost:5000/foods`)
    const data = await res.json()
    return data
  }

  return (
    <div className="container my-4">
      <div className="lead py-3">Total Groceries: { foods.length } Available </div>
      <div className="row">
        {/* ========================= */}
        <Foods foods={foods} />
        {/* ========================= */}
      </div>
    </div>
  )
}

export default Home
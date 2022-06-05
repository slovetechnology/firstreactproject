
import { FaStar } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'

const Singlefood = ({item}) => {
    
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card shadow">
        <img className="homeimg cursor-pointer" src={`./cooks/${item.image}`} alt="" />
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <div className="card-text"> <FaStar className='text-warning' /><FaStar className='text-warning' /><FaStar className='text-warning' /><FaStar className='text-warning' /><FaStar className='text-warning' /> </div>
          <p className="card-text">{item.content}</p>
          <div className="d-flex justify-content-between">
            <div className=""></div> 
            <div className="text-muted d-flex align-items-center cardicons">
              <FaShoppingCart className='mx-4' />
              <FaHeart />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Singlefood
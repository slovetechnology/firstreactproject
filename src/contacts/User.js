import { FaTimes } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
const User = ({delUser, item, stat, seeUser}) => {
  return (
      <div>
        {/* ===================== */}
        <div className={`${item.status && 'contactlist'} border mb-2 p-2 d-flex align-items-center justify-content-between`} onDoubleClick={() => stat(item.id)}>
            <div className="">
                <div>{item.name}</div>
                <div>{item.phone} {item.status ? <span className="text-danger">(Locked)</span> : <span className="text-success">(Free)</span>} </div>
            </div>
            <div className="">
                <FaTimes className="text-danger cursor-pointer mx-3 h4" onClick={() => delUser(item.id)} />
                <FaEye className="text-primary cursor-pointer h4" onClick={() => seeUser(item.id)} />
            </div>
        </div>
        {/* ==================== */}
      </div>
  )
}

export default User
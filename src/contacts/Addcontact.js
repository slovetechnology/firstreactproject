import {FaUserCircle} from 'react-icons/fa'
import {useState} from 'react'
const Addcontact = ({Addbutton}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [status, setStatus] = useState(false)
    
    // lets return an error message for wrong inputs
    const [err, setErr] = useState(false)
    const [gud, setGud] = useState(false)
    const [errmsg, setErrmsg] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        if(name === '') {
            setErr(!err)
            setErrmsg('The Contact name is required!..')
            setTimeout(() => {
                setErr(false)
            }, 3000);
        }else if(phone === '') {
            setErr(!err)
            setErrmsg('The Contact Phone Number is required!..')
            setTimeout(() => {
                setErr(false)
            }, 3000);
        }else{
            setGud(!gud)
            setErrmsg('Contact form successfully added!..')
            setTimeout(() => {
                setGud(false)
            }, 3000);
            Addbutton({name, phone, status})
            setName('')
            setPhone('')
            setStatus(false)
        }
    }
  return (
      <>
      <form className="mb-4">
          {err && <div className="alert alert-danger my-2">{errmsg}</div>}
          {gud && <div className='alert alert-success my-2'>{errmsg}</div>}
          <div className="h3 text-muted d-flex align-items-center"> <FaUserCircle className='mx-2' /> Create Contact Form</div>
          <div className="form-group mb-2">
              <input type="text" placeholder="Enter Username" className="form-control form-control-lg rounded-0" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group mb-2">
              <input type="text" placeholder="Enter Phone Number" className="form-control form-control-lg rounded-0" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="form-group mb-2">
              <label>
                  <input type="checkbox" checked={status} value={status} onChange={(e) => setStatus(e.currentTarget.checked)} /> Check to lock user contact
              </label>
          </div>
          <div className="form-group mb-2">
              <button onClick={submitForm} className="btn btn-success w-100 text-capitalize py-2 rounded-0 shadow-sm">create contact</button>
          </div>
      </form>
      </>
  )
}

export default Addcontact
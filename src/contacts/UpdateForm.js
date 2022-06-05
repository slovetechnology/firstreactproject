import {FaUserCircle} from 'react-icons/fa'
import {useState} from 'react'

const UpdateForm = ({formname, formphone, formstatus, updateName, updateNo, updateStat, setNewupdate}) => {
    const [msg, setMsg] = useState('')
    const [err, setErr] = useState(false)
    const [gud, setGud] = useState(false)
    const updatecontactForm = (e) => {
        e.preventDefault()
        if(formname === '') {
            setErr(true)
            setMsg('The username must not be empty')
            setTimeout(() => {
                setErr(false)
            }, 3000);
        }else if(formphone === '') {
            setErr(true)
            setMsg('The user phone number must not be empty')
            setTimeout(() => {
                setErr(false)
            }, 3000);
        }else{
            setGud(true)
            setMsg('Contact successfully updated')
            setNewupdate({formname, formphone, formstatus})
            setTimeout(() => {
                setGud(false)
            }, 3000);
        }
    }
  return (
    <>
    <form className="mb-4">
        {err && <div className='alert alert-danger my-2'>{msg}</div>}
        {gud && <div className='alert alert-success my-2'>{msg}</div>}
        <div className="h3 text-muted d-flex align-items-center"> <FaUserCircle className='mx-2' /> Update Contact Form</div>
        <div className="form-group mb-2">
            <input type="text" value={formname} placeholder={formname} onChange={(e)=>{updateName(e.target.value)}} className="form-control rounded-0" />
        </div>
        <div className="form-group mb-2">
            <input value={formphone} onChange={(e)=>{updateNo(e.target.value)}} type="text" className="form-control rounded-0" placeholder={formphone} />
        </div>
        <div className="form-group mb-2">
            <label>
                <input type="checkbox" checked={formstatus} value={formstatus} onChange={(e) => updateStat(e.currentTarget.checked)} /> Check to lock user contact
            </label>
        </div>
        <div className="form-group mb-2">
            <button className="btn btn-success w-100 text-capitalize py-2 rounded-0 shadow-sm" onClick={updatecontactForm}>update contact</button>
        </div>
    </form>
    </>
  )
}

export default UpdateForm
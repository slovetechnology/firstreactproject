import {useState, useEffect} from 'react'
import Users from "./Users"
import Addcontact from "./Addcontact"
import Button from './Button'
import UpdateForm from './UpdateForm'
const Contact = () => {
    const [users, setUsers] = useState([])
    const [togUpdate, setTogUpdate] = useState(false)
    // let call in the users automatically when this component is rendered
    useEffect(() => {
        const getusers = async () => {
            const allusers = await fetchUsers()
            setUsers(allusers)
        }
        getusers()
    })
    // fetching users data from the server
    const fetchUsers = async () => {
        const res = await fetch(`http://localhost:5000/users`)
        const data = res.json()
        return data
    }
    // fetching single user data from the server
    const singleUser = async (id) => {
        const res = await fetch(`http://localhost:5000/users/${id}`)
        const data = await res.json()
        return data
    }
    // toggle the form open and close
    const [toggleForm, setToggleForm] = useState(false)
    const ToggleformBtn = () => {
        setToggleForm(!toggleForm)
        setTogUpdate(false)
    }
    // adding new user contact
    const Adduser = async (user) => {
        const res = await fetch(`http://localhost:5000/users`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        const data = res.json();
        setUsers([...users, data])
        // const id = Math.floor(Math.random() * 1000) + 1
        // const newUser = {id, ...user}
        // setUsers([...users, newUser])
    }
    // delete user contact
    const deleteUser = async (id) => {
        await fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
        setTogUpdate(false)
        setUsers(users.filter((item) => item.id !== id))
    }
    // toggle active user status
    const toggleStat = async (id) => {
        const userTotog = await singleUser(id)
        const userTogged = {...userTotog, status: !userTotog.status}

        const res = await fetch(`http://localhost:5000/users/${id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userTogged)
        })
        const data = await res.json()
        setUsers(users.map((item) => item.id === id ? {...item, status: !data.status} : item))
    }
    // update user details
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [status, setStatus] = useState(false)
    const [userid, setUserid] = useState('')
    const updateUser = async (id) => {
        const res = await singleUser(id)
        setName(res.name)
        setPhone(res.phone)
        setStatus(res.status)
        setUserid(res.id)
        setTogUpdate(true)
        setToggleForm(false)
    }
    
    const updateName = (name)=>{
        setName(name)
    }
    const updateNo = (no)=>{
        setPhone(no)
    }
    const updateStat = (stat) => {
        setStatus(stat)
    }
    const setNewupdate = async (user) => {
        const getme = await singleUser(userid)
        const getinUser = {...getme, name: name, phone: phone, status: status}
        
        const res = await fetch(`http://localhost:5000/users/${userid}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(getinUser)
        })
        const data = await res.json()
        return data
    }
    
  return (
      <div className="container mb-3">
          <div className="row">
              <div className="col-md-5 h-fit-content bg-white shadow p-3 mt-3 rounded">
                  <Button Addtog={ToggleformBtn} color={toggleForm ? 'btn-danger' : 'btn-primary'} text={toggleForm ? 'close form' : 'new contact'} />
                { toggleForm && <Addcontact Addbutton={Adduser} />}
                { togUpdate && <UpdateForm updateName={updateName} updateNo={updateNo} updateStat={updateStat} formname={name} formphone={phone} formstatus={status} setNewupdate={setNewupdate} /> }
              </div>
              <div className="col-md-6 offset-md-1 contdivs bg-white shadow p-3 mt-3 rounded">
                  { users.length > 0 ? <Users showUser={updateUser} users={users} togStat={toggleStat} delUser={deleteUser} />  : 'No Contact found'}
              </div>
          </div>
      </div>
  )
}

export default Contact
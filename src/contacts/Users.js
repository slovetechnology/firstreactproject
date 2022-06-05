import User from "./User"
const Users = ({delUser, users, togStat, showUser}) => {
  return (
      <>
          {users.map((item) => (
            <User key={item.id} seeUser={showUser} stat={togStat} item={item} delUser={delUser} />
          ))}
      </>
  )
}

export default Users
import Singlefood from "./Singlefood"
const Foods = ({foods}) => {
  return (
      <>
        {foods.map((item) => (
            <Singlefood key={item.id} item={item} />
        ))}
      </>
  )
}

export default Foods
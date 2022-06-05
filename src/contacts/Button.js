
const Button = ({Addtog, color, text}) => {
  return (
    <div className="d-flex justify-content-between">
        <div></div>
        <button className={`btn btn-sm py-2 shadow text-capitalize ${color}`} onClick={Addtog}>{text}</button>
    </div>
  )
}

export default Button
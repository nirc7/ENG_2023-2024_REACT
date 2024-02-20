

export default function Product(props) {

  return (
    <div style={{ border: 'solid black 1px', borderRadius: 15, padding: 10, margin: 10 }}>Product <br />
      <img src={props.img} style={{ width: 100, height: 100 }} alt="" /> <br />
      name {props.name} <br />
      price= {props.price} <br />
      <button style={{ backgroundColor: 'lightgray' }}
        onClick={() => props.sendId2Buy(props.id)}>Add 2 Cart</button> <br />
    </div>
  )
}

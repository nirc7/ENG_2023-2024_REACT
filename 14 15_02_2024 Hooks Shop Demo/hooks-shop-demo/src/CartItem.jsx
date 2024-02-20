

export default function CartItem(props) {
  return (
    <div style={{ backgroundColor: 'lightcyan', margin: 5 }}>
      {props.name} {props.price}$
      <span style={{
        backgroundColor: 'lightcoral',
        borderRadius: 5,
        padding: 2,
        margin: 5,
        border: '2px dashed'
      }} onClick={() => props.sendId2Del(props.id)} >X</span>
    </div>
  )
}

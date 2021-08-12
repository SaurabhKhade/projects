export default function Code(props) {
  let {gradientProp,colors,gradient,styleText} = props
  
  let limitSymbol = gradient==='conic'?'deg':'%'
  let propFrom = gradient==='radial'?'at':(gradient==='conic'?"from":"")
  
  function copyStyle() {
    let toCopy = 'background: '+styleText+';'
    navigator.clipboard.writeText(toCopy)
    alert(`copied style\n${toCopy}\nsuccessfully`)
  }
  return (
    <div className="code">
      <button onClick={copyStyle} className="copy-btn"><i className="fa fa-copy" /></button>
      background:<br />
      {gradient}-gradient(<br />
      &nbsp;&nbsp;{propFrom} {gradientProp}
      {colors.map((item,i)=>{
        if (item.limit == -1) {
          return (<div className="code-line" key={i}>,<br />&nbsp;&nbsp;{item.color}</div>)
        } else {
          return (<div className="code-line" key={i}>,<br />&nbsp;&nbsp;{item.color} {item.limit}{limitSymbol}</div>)
        }
      })}
      <br />);
    </div>
  )
}

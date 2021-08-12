export default function maker(gradient,gradientProp,colors,setStyleText) {
  
  let limitSymbol = gradient==='conic'?'deg':'%'
  
  let propFrom = gradient==='radial'?'at':(gradient==='conic'?"from":"")
  
  setStyleText(`${gradient}-gradient(${propFrom} ${gradientProp}`)
  
  colors.forEach(item=>{
    setStyleText(old=>{
      if (item.limit == -1) {
        return (old+`,${item.color}`)
      } else {
        return (old+`,${item.color} ${item.limit}${limitSymbol}`) 
      }
    })
  })
  
  setStyleText(old=>{
    return (old+')')
  })
}


function styleMaker() {
    
  }
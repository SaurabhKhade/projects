import {useState,useEffect} from 'react'

export default function Input(props) {
  let {colors,setColors,gradient,setGradient,setGradientProp} = props
  const [linearDeg,setLinearDeg] = useState('0deg')
  const [radialAt,setRadialAt] = useState('center')
  const [conicDeg,setConicDeg] = useState('0deg')
  
  
  
  const typeStyle = [
    {
      color: gradient==='linear'?'#ee7900':'inherit',
      borderBottomWidth: gradient==='linear'?'2px':'0'
    },
    {
      color: gradient==='radial'?'#ee7900':'inherit',
      borderBottomWidth: gradient==='radial'?'2px':'0'
    },
    {
      color: gradient==='conic'?'#ee7900':'inherit',
      borderBottomWidth: gradient==='conic'?'2px':'0'
    }
  ]
  
  function limitHandler(e) {
    let {name,value} = e.target
    if (gradient==='conic') {
      if (value>360 || value<-1) {
        return;
      }  
    } else {
      if (value>100 || value<-1) {
        return;
      }
    }
    setColors(old=>{
      old[name].limit = value
      return [...old]
    })
  }
  
  
  
  function colorHandler(e) {
    let {name,value} = e.target
    setColors(old=>{
      old[name].color = value
      return [...old]
    })
  }
  
  function addColor() {
    setColors(old=>{
      return [
        ...old,
        {
          color: '#800080',
          limit: -1
        }
      ]
    })
  }
  
  function removeColor(i) {
    console.log(i)
    setColors(old=>{
      return old.filter((item,index)=>{
        if(index===i) {
          return false
        } else {
          return true
        }
      })
    })
  }
  
  const style= {
    visibility: (colors.length>2)?"visible":"hidden"
  }
  
  function changeType(name) {
    // console.log(name)
    setGradient(name.toLowerCase())
    if (name==='Linear') {
      setGradientProp(linearDeg)
    } else if (name==='Radial') {
      setGradientProp(radialAt)
    } else {
      setGradientProp(conicDeg)
    }
  }
  
  useEffect(()=>{
    setGradientProp((linearDeg+'deg'))
  },[linearDeg])
  
  useEffect(()=>{
      setGradientProp(radialAt)
  },[radialAt])
  
  useEffect(()=>{
      setGradientProp((conicDeg+'deg'))
  },[conicDeg])
  
  function typeSelector(item,index) {
    return (
      <p style={typeStyle[index]} className="type-selector" key={item} onClick={()=>changeType(item)}>{item}</p>
    )
  }
  
  function radialAtHandler(e) {
    setRadialAt(e.target.value)
  }
  
  function linearConicHandler(e) {
    let {value,name} = e.target
    if (name==='linear') {
      if(value>360) {
        setLinearDeg(100)
      } else if(value<0) {
        setLinearDeg(0)
      } else {
        setLinearDeg(value)
      }
    } else {
      if(value>360) {
        setConicDeg(360)
      } else if(value<0) {
        setConicDeg(0)
      } else {
        setConicDeg(value)
      }
    }
  }
   
  function gradientProp() {
    if (gradient==='radial') {
      return (
        <>
        <p>At: </p>
        <select value={radialAt} className="select-radial" onChange={radialAtHandler}>
          <option value="center">Center</option>
          <option value="center left">Center Left</option>
          <option value="center right">Center Right</option>
          <option value="top left">Top Left</option>
          <option value="top right">Top Right</option>
          <option value="top center">Top Center</option>
          <option value="bottom left">Bottom Left</option>
          <option value="bottom right">Bottom Right</option>
          <option value="bottom center">Bottom Center</option>
        </select>
        </>
      )
    } else {
      return (
        <>
        <p>{gradient==='linear'?"Direction:":"Starting Degree"}</p>
        <input type="number" name={gradient} onChange={linearConicHandler} defaultValue="0"/>
        deg
        </>
      )
    }
  }
  
  return (
  <div className="input">
    <div className="gradient-settings">
      <h3>Gradient Type</h3>
      <div className="gradient-type">
        {
          ['Linear','Radial','Conic'].map(typeSelector)
        }
      </div>
      <div className="gradient-prop">
        {gradientProp()}
      </div>
    </div>
    {
      colors.map((item,i)=>{
        return (
          <div className="box" key={i}>
            <input type="number" name={i} value={item.limit} onChange={limitHandler}/>
            <div className="color-wrapper" style={{backgroundColor:(item.color)}}>
              <input type="color" value={item.color} name={i} onChange={colorHandler}/>
            </div>
            <p>{item.color.toUpperCase()}</p>
            <button className="remove-color" onClick={()=>removeColor(i)} style={style}>
              X
            </button>
          </div>
        )
      })
    }
    <button className="add-color" onClick={addColor}>+</button>
  </div>
  )
}
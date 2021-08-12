import Gradient from '../components/Gradient'
import Input from '../components/Input'
import Code from '../components/Code'
import {useState,useEffect} from 'react'
import styleMaker from '../components/styleMaker'

export default function Home() {
  const [colors,setColors] = useState([{
    color: '#800080',
    limit: -1
  },{
    color: '#e079e0',
    limit: -1
  }])
  const [gradient,setGradient] = useState('linear')
  const [gradientProp,setGradientProp] = useState('0deg')
  const [styleText,setStyleText] = useState('')
  
  const style = {
    background: styleText
  }
  
  useEffect(()=>{
    styleMaker(gradient,gradientProp,colors,setStyleText)
  },[])
  
  useEffect(()=>{
    styleMaker(gradient,gradientProp,colors,setStyleText)
  },[gradient,colors,gradientProp])
  
  function copy(text) {
    var input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
 }
  
  return (
  <main className="container">
    <Gradient style={style}/>
    <Input colors={colors} setColors={setColors} gradient={gradient} setGradient={setGradient} setGradientProp={setGradientProp}/>
    <Code gradientProp={gradientProp} colors={colors} gradient={gradient} styleText={styleText}/>
  </main>
  )
}
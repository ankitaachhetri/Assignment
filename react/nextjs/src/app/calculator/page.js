'use client'
const Calculator = () => {
  const [output, setOutput] = useState('')
  const buttons = [
      [{key: 'AC', className: 'bg-gray-300'},
      {key: '+/-', className: 'bg-gray-300'},
      {key: '%', className: 'bg-gray-300'},
      {key: '/', className: 'bg-orange-300'}],
      [{key: '7', className: 'bg-gray-300'},
      {key: '8', className: 'bg-gray-300'},
      {key: '9', className: 'bg-gray-300'},
      {key: '*', className: 'bg-orange-300'}],
      [{key: '4', className: 'bg-gray-300'},
      {key: '5', className: 'bg-gray-300'},
      {key: '6', className: 'bg-gray-300'},
      {key: '-', className: 'bg-orange-300'}],
      [{key: '1', className: 'bg-gray-300'},
      {key: '2', className: 'bg-gray-300'},
      {key: '3', className: 'bg-gray-300'},
      {key: '+', className: 'bg-orange-300'}],
      [{key: '0', className: 'bg-gray-300'},
      {key: '.', className: 'bg-gray-300'},
      {key: '=', className: 'bg-orange-300'}]
  ]

  const handleChange = (key)=>{
    switch(key){
      case '+', '-','*','/':
          setOutput(output+ key)
          break;
      case 'AC':
          setOutput('')
          break;
      case '+/-':
          setOutput(eval(output*-1))
          break;
      default:
          setOutput(output+ key)
          break;
    }

  }
return (
  <div className='bg-black w-80 p-2'>
  <div className='bg-black p-2 text-white'>
      <div className='text-white'>{output}</div>
      <Button className='bg-gray-200'>AC</Button>
      <Button className='bg-gray-200'>+/-</Button>
      <Button className='bg-gray-200'>%</Button>
      <Button className='bg-gray-200'>/</Button>
      <Button onClick={()=>setOutput(output+ 9) }>9</Button>
      <Button onClick={()=>setOutput(output+ 8)}  >8</Button>
      <Button>7</Button>
      <Button className='bg-orange-500'>*</Button>
      <Button>6</Button>
      <Button>5</Button>
      <Button>4</Button>
      <Button className='bg-orange-500'>-</Button>
      <Button>3</Button>
      <Button>2</Button>
      <Button>1</Button>
      <Button onClick={()=>setOutput(output+ '+') } className='bg-orange-500'>+</Button>
      <Button>0</Button>
      <Button>.</Button>
      <Button onClick={()=> setOutput(eval(output) )}>=</Button>
      {buttons.map((item,id)=>{
          return <div className='m-4'>
              {item.map((val,idx)=>{
                return  <Button onClick={()=> handleChange(val.key)} className={val.className + ' rounded-full mx-1'}>{val.key}</Button>
              })}
          </div>
      })}
  </div>
)
}
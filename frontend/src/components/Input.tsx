

const Input = ({onChange,placeholder} :{placeholder :string, onChange: () =>void}) => {
  return (
    <div>
      <input type="text" onChange={onChange} placeholder={placeholder} className='px-4 py-2 border rounded-md m-2 ' />
    </div>
  )
}

export default Input

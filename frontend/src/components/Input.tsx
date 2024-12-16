
interface InputProps{
  placeholder:string;
  reference:any
}

const Input = ({placeholder,reference} :InputProps) => {
  return (
    <div>
      <input ref={reference} type="text" placeholder={placeholder} className='px-4 py-2 border rounded-md m-2 ' />
    </div>
  )
}

export default Input

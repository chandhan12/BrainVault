
import './App.css'
import { Button } from './components/Button'
import { Plus, Share } from './components/Icons'

function App() {
 return<div className='flex'>
<Button variant='primary' text="Add content"  startIcon={<Plus/>}/>
<Button variant='secondary' text="Share Brain" startIcon={ <Share/>} />


 </div>
}

export default App

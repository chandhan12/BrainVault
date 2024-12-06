
import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import CreateContentModel from './components/CreateContentModel'
import { Plus, Share } from './components/Icons'

function App() {
 return<div className='p-4'>
    <CreateContentModel open={true}/>
<div className='flex justify-end'>
<Button variant='primary' text="Add content"  startIcon={<Plus/>}/>
<Button variant='secondary' text="Share Brain" startIcon={ <Share/>} />

</div>

<div className='flex gap-4'>
    
<Card type="twitter" link={`https://x.com/CricCrazyJohns/status/1864949013893779591`} title={`doge coin tweet`}/>
<Card type="youtube" link={`https://www.youtube.com/watch?v=RWXAOJm3LAE`} title={`JEE vs Remote`}/>


</div>
 </div>
}

export default App

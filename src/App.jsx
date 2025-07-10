
import './App.css'

import Card from './components/Card'
import Student from './components/Student';

import StData from './students.json';

function App() {


  return (
    <>
      <div className='cards'>
        <Card title='card title 1' />
        <Card title='card title 2' />
        <Card  title='card title 3'/>
        <Card  title='card title 4'/>
        <Card  title='card title 5'/>
      </div>

      <div>
        <Student sData={StData} />
      </div>
    </>
  )
}

export default App


import './App.css'

import Card from './components/Card'
import Student from './components/Student';
import Users from './components/Users';

import StData from './students.json';


const userDatas=[
  {
    name:'animes barman',
    age:20,
    address:[{home:'thakurgaon'}, {offices:'dhaka'}, {address:'puraton Thakurgaon'}],
    mobile:1723892162,
  },
  {
    name:'animes barman',
    age:20,
    address:[{home:'thakurgaon'}, {offices:'dhaka'}, {address:'puraton Thakurgaon'}],
    mobile:1723892162,
  },
  {
    name:'animes barman',
    age:20,
    address:[{home:'thakurgaon'}, {offices:'dhaka'}, {address:'puraton Thakurgaon'}],
    mobile:1723892162,
  },
  {
    name:'animes barman',
    age:20,
    address:[{home:'thakurgaon'}, {offices:'dhaka'}, {address:'puraton Thakurgaon'}],
    mobile:1723892162,
  },
  {
    name:'animes barman',
    age:20,
    address:[{home:'thakurgaon'}, {offices:'dhaka'}, {address:'puraton Thakurgaon'}],
    mobile:1723892162,
  }

]

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
        <Student data={StData} />
      </div>

      <div>
        <Users  usersData={userDatas} />
      </div>
    </>
  )
}

export default App

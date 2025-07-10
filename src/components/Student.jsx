
import StudentCard from './StudentCard';

export default function Student(props) {


    let {sData}=props;

    let items=[];

    items=sData.map((item)=> <StudentCard key={item.id} name={item.name} age={item.age} class={item.class}  section={item.section} />)


    


  return (
    <div>Student

        {items}
    </div>
  )
}


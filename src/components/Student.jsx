
import StudentCard from './StudentCard';


export default function Student(props) {


    let {data}=props;

    let items=[];

    items=data.map((item)=> <StudentCard key={item.id} name={item.name} age={item.age} class={item.class}  section={item.section} />)

  return (
    <div>Student

        {items}
    </div>
  )
}


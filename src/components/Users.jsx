import React from 'react'

const Users = (props) => {


    const usersData = props.usersData;

    console.log(usersData);

  return (
    <div>
        <h1>Users</h1>
        {usersData.map((item,index)=>{
            return(
                <div key={index}>
                    <h1>{item.name}</h1>
                    <h2>{item.age}</h2>
                    {item.address.map((item,index)=>{
                        return(
                            <div key={index}>
                                <h3>{item.home}</h3>
                            </div>
                        )
                    })}
                    <p>{item.mobile}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Users
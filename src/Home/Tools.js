import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(() =>{
        fetch('https://powerful-retreat-95123.herokuapp.com/tools')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
          {
              tools.map(tool =><Tool
              key={tool._id}
              tool={tool}
              ></Tool>)
          }
        </div>
    );
};

export default Tools;
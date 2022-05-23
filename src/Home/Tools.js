import React, { useEffect, useState } from 'react';

const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(() =>{
        fetch('tools.json')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])
    return (
        <div>
          
        </div>
    );
};

export default Tools;
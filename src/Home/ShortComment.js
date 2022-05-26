import React from 'react';

const ShortComment = () => {
    const handleComment = async event =>{
       event.preventDefault()
       console.log(event)
    } 
    return (
        <div className='w-full'>
            <textarea class="textarea w-full border-4 h-30 textarea-accent" placeholder="Give a short description about your allover experience"></textarea>
            <button onClick={handleComment} class="btn btn-sm mb-5">Submit</button>

        </div>
    );
};

export default ShortComment;
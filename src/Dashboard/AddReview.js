import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{ 
        console.log(data);
        const url =`http://localhost:5000/addreview`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then( result =>{
         if(result.acknowledged === true){
            toast("Default Notification !");
         }
        })
    };

 
    
    return (
        <div >
        
        <div className='card w-96 mt-20 h-70 min-h-full mx-auto bg-base-100 shadow-2xl '>
        <h2 class="card-title mx-auto font-bold mt-20 uppercase">Give us your Review</h2>
        <form  onSubmit={handleSubmit(onSubmit)}>
            <input type='number' placeholder='Rating' className='border-solid block border-4 mx-auto my-2 rounded-md mt-10	'  {...register("rating", { required: true, })} />
            <textarea placeholder='Write something about your experience' className='border-solid border-4 block my-5 mx-auto rounded-md' {...register("description")} />
            <input type="submit" className='border-2 mb-20 rounded-lg p-2 bg-yellow-400' value='Submit'  />
        </form>
        </div>
    </div>
    );
};

export default Review;<h2>
My review</h2>
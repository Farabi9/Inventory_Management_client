import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';


const Purchase = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({});
  const [user] = useAuthState(auth)
  const { register, formState: { errors }, handleSubmit, reset } = useForm();



  useEffect(() => {
    fetch(`http://localhost:5000/tools/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
      });
  }, [id])

  const onSubmit = async data =>{
    const url = `http://localhost:5000/addorder`;
    fetch(url, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(result => {
           if(result.insertedId){
             toast.success('Your Order Placed. Go and Pay for it')
             reset()
           }
            }
        )
  }


  return (
    <div className='lg:flex sm:block'>
      <div className="justify-center  mx-auto	mt-8 mb-8	 card w-80 bg-base-100 shadow-xl">
        <figure><img src={product.img} alt="" /></figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className='text-sm'>{product.description}</p>
          <p className='font-bold'>Available Quanity: {product.availableQuantity}</p>
          <p className='font-bold'>Min Quanity: {product.minQuantity}</p>
          <p className='font-bold'>Price per piece: ${product.prize}</p>
        </div>
      </div>
      <div >
        <form className='mr-20 mb-10' onSubmit={handleSubmit(onSubmit)}>

          <div className="form-control ">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              value={user.displayName}
              placeholder="Name"
              className="input input-bordered w-full max-w-xs " readOnly
              {...register("name", {
                required: {
                  value: true,
              

                }
              })}
            />
            
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="text"
              value={user.email} readOnly
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,               
                }
              })}
            />
           
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Address</span>
            </label>
            <input
              type="text"
              placeholder="Adress"
              className="input input-bordered w-full max-w-xs"
              {...register("address", {
                required: {
                  value: true,
                  message: 'Address is Required'

                }
              })}
            />
            <label className="label">
              {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Phone number</span>
            </label>
            <input
              type="number"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
              {...register("phone", {
                required: {
                  value: true,
                  message: 'Phone number is Required'

                }
              })}
            />
            <label className="label">
              {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}


            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Quantity</span>
            </label>
            <input
              type="number"
              defaultValue={product.minQuantity}
              placeholder="Quantity"
              className="input input-bordered w-full max-w-xs"
              {...register("Quantity", {
                required: {
                  value: true,
                  message: 'Quantity is Required'

                },
              })}
            />
            <label className="label">
              {errors.Quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Quantity.message}</span>}
            </label>

          </div>
          <input className='btn w-full max-w-xs text-black bg-primary' type="submit" value='Place Order' />

        </form>
      </div>
    </div>


  );
};

export default Purchase;
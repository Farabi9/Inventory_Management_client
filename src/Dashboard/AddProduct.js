import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Users from './Users';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
     const [p, setP] = useState()
    const {isLoading, refetch} = useQuery('products', () => fetch('http://localhost:5000/tools').then(res => res.json()));

    const imageStorageKey='9905dcb1a2e5f6c27b38cc320f73f926';

    const onSubmit = async data =>{
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const product ={
                    name: data.name,
                    description: data.description,
                    prize: data.prize,
                    availableQuantity: data.availableQuantity,
                    minQuantity: data.minQuantity,
                    img: img,
                }
                fetch('http://localhost:5000/products', {
                    method:'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(inserted =>{
                  if(inserted.insertedId){
                    toast.success('Product Added Successfully')
                    reset()
                  }
                  else{
                      toast.error('Failed to add product')
                  }
                })
            }
        })
    }
    if(isLoading){
        return <Loading></Loading>
    }


    return (
        <div className='card w-full bg-green-300 p-5 mt-2 rounded-3lg shadow-2xl mb-4'>
            <h2 className=" text-3xl font-sans font-bold mt-10">Add a New Product</h2>
            <form  onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs mx-auto mt-5 ">
                    <label className="label">
                        <span className="label-text font-bold">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'

                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                    </label>
                </div>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text font-bold">Short Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Short Description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is Required'

                            }
                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                        

                    </label>
                </div>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text font-bold">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("prize", {
                            required: {
                                value: true,
                                message: 'Price is Required'

                            }
                        })}
                    />
                    <label className="label">
                        {errors.prize?.type === 'required' && <span className="label-text-alt text-red-500">{errors.prize.message}</span>}
                      

                    </label>
                </div>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text font-bold">Available Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Available Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("availableQuantity", {
                            required: {
                                value: true,
                                message: 'Quantity is Required'

                            }
                        })}
                    />
                    <label className="label">
                        {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}
                        

                    </label>
                </div>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text font-bold">Min-Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="MinQuantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minQuantity", {
                            required: {
                                value: true,
                                message: 'MinQuantity is Required'

                            },
                        })}
                    />
                    <label className="label">
                        {errors.minQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minQuantity.message}</span>}
                       

                    </label>
                </div>
              

                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'

                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.image.message}</span>}


                    </label>
                    <input className='btn w-full max-w-xs text-white' type="submit" value='Add' />
                </div>
            
            </form>
        </div>
    );
};

export default AddProduct;
'use client'
'static'
import Mydiv from '@/components/Shared/Mydiv';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const { user, isLoaded } = useUser()

    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleProduct = async (data) => {
        if (!isLoaded) return <p>Loading...</p>
        data.email = user.emailAddresses[0].emailAddress
        //    making image url 
        const productImg = data.image[0]
        const formData = new FormData()
        formData.append("image", productImg)
        const uri = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_SECRET}`
        axios.post(uri, formData)
            .then(res => {
                data.image = res.data.data.url
                axios.post('http://localhost:3100/add-product', data)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: "Your Product Added Successfuly!",
                                icon: "success",
                                draggable: false
                            });
                        }
                    })
            })
            .catch(err => {
                console.log(err)
            })


    }
    return (
        <Mydiv >
            <form onSubmit={handleSubmit(handleProduct)} className="fieldset mt-8 md:w-2/3 md:mx-auto border border-green-700 rounded-2xl shadow-2xl p-4">

                <div className='left flex flex-col md:flex-row justify-between'>
                    <div className='flex flex-col md:flex-row justify-between w-full gap-5'>
                        <div className='w-full'>
                            <label className="label pr-2">Product Name</label>
                            <input required {...register("name")} type="text" className="input w-full" placeholder="Give name of your product" />
                        </div>
                        {/* Category  */}
                        <div className='w-80'>
                            <label className="label pr-2">Category</label>
                            <select {...register('category')} defaultValue="Pick a color" className="select w-full">
                                <option >vegetables</option>
                                <option>fruits</option>
                                <option>dairy</option>
                                <option>grains</option>

                            </select>
                        </div>
                    </div>
                </div>
                <div className='right flex flex-col sm:flex-row gap-3 justify-between pb-5'>
                    <div>
                        {/* Price  */}
                        <label className="label">Price</label>
                        <input required {...register('price')} type="number" className="input w-full" placeholder="set price" />
                    </div>
                    <div>
                        <label className="label">Location</label>
                        <input required {...register('location')} type="text" className="input w-full" placeholder="Your location" />
                    </div>
                </div>
                <div className='flex flex-col'>
                    {/* image  */}
                    <label className="label">Product Image</label>
                    <input required {...register('image')} type="file" className="file-input bg-base-200 text-white opacity-55 w-full" />

                </div>
                {/* quntity info */}

                <div className='userInfo flex flex-col md:flex-row justify-between pt-5'>
                    <div>
                        {/* min quntity  */}
                        <label className="label">Min Quantity</label>
                        <input {...register("min-quantity")} defaultValue={1} type="number" className="input bg-base-200 text-white opacity-55" />
                    </div>
                    <div>
                        {/* max quntity  */}
                        <label className="label">Max Quantity</label>
                        <input {...register("max-quantity")} defaultValue={100} type="number" className="input bg-base-200 text-white opacity-55" />
                    </div>


                </div>

                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">Description</legend>
                    <textarea required {...register('description', { minLength: { value: 35, message: "Description must be more then 35 charecters" } })} className="textarea w-full h-24" placeholder="Description"></textarea>
                </fieldset>
                {errors?.description && <p className='text-red-400'>{errors.description?.message}</p>}
                <button className="btn btn-primary text-black mt-4">Add Transaction </button>
            </form>
        </Mydiv>
    );
};

export default AddProduct;
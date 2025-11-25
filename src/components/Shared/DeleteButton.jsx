'use client'
import axios from 'axios';
import toast from 'react-hot-toast';
import { MdDeleteForever } from 'react-icons/md';
const DeleteButton = ({productId,reFetch}) => {
    const handleDelete = async(id)=>{
      try {
       const res = await axios.delete(`http://localhost:3100/product/${id}`)
       if(res.data.deletedCount){
        toast.success(" Deleted Successfuly")
        reFetch(true)
       }
      } catch (error) {
        console.log(error)
      }
    }
    return (
        <div>
            <button onClick={()=>handleDelete(productId)} className='btn hover:btn-error'><MdDeleteForever /></button>
        </div>
    );
};

export default DeleteButton;
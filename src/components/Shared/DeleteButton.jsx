'use client'
import axios from 'axios';
import toast from 'react-hot-toast';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';
const DeleteButton = ({ productId, reFetch }) => {
  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axios.delete(`https://haat-bazar-server.vercel.app/product/${id}`)
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            reFetch(true)
          }

        }
      });

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <button onClick={() => handleDelete(productId)} className='btn hover:btn-error'><MdDeleteForever /></button>
    </div>
  );
};

export default DeleteButton;
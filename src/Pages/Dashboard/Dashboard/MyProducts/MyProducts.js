// import { useQuery } from '@tanstack/react-query';
// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../../../../Contexts/AuthProvider';

// const MyProducts = () => {
//     const { user } = useContext(AuthContext);
//     const [deletingproduct, setDeletingProduct] = useState(null);




//     const url = `http://localhost:5000/products?email=${user?.email}`;


//     const { data: products = [] } = useQuery({
//         queryKey: ['products', user?.email],
//         queryFn: async () => {
//             const res = await fetch(url);
//             const data = await res.json();
//             return data;
//         }
//     })

//     const handleDeleteproduct = product => {
//         fetch(`http://localhost:5000/products/${product._id}`, {
//             method: 'DELETE',

//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.deletedCount > 0) {
//                     refetch();
//                     toast.success(`product ${product.name} deleted successfully`)
//                 }
//             })
//     }

//     if (isLoading) {
//         return <Loading></Loading>
//     }
//     return (
//         <div>
//             <h2 className='text-3xl mb-5 text-center mt-10 mb-10 text-orange-500'>My Product</h2>
//             {
//                 products.map((product, i) => <div key={i} className="card w-96 bg-base-100 shadow-xl">
//                     <figure><img src={product.photo} alt="" /></figure>
//                     <div className="card-body">
//                         <h2 className="card-title">
//                             <h2> {product.name}</h2>
//                             <h2>{product.location}</h2>


//                         </h2>
//                         <p>{product.description}</p>
//                         <div className="card-actions justify-start">
//                             <div className="badge badge-outline">{product.condition}</div>
//                             <div className="badge badge-outline">${product.purchase}</div>
//                         </div>
//                         <div className="card-actions justify-end">
//                             <div className="badge badge-outline">{product.price}</div>
//                             <div className="badge badge-outline">{product.resale}</div>
//                         </div>
//                         <div>
//                             <h2>{product.category}</h2>
//                             <div className="badge badge-secondary btn mr-6">Delete</div>
//                             <div className="badge badge-secondary btn">Unsold</div>
//                             <h2>{product.location}</h2>
//                         </div>
//                     </div>
//                 </div>)
//             }

//             {
//                 deletingDoctor && <Modd
//                     title={`Are you sure you want to delete?`}
//                     message={`If you delete ${deletingDoctor.name}. It cannot be undone.`}
//                     successAction={handleDeleteDoctor}
//                     successButtonName="Delete"
//                     modalData={deletingDoctor}
//                     closeModal={closeModal}
//                 >
//                 </ConfirmationModal>
//                 <Modal
//             }
//         </div>
//     );
// };

// export default MyProducts;
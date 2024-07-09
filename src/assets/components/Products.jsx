import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../features/products/productsSlice';

function Products() {
    const products = useSelector((state) => state.products.value);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    console.log(products);

    // products bo'sh bo'lsa yoki undefined bo'lsa, qayta yuklashni kuting
    if (!products) {
        return <div>Loading...</div>;
    }

    return (
        <div className='grid grid-cols-4 gap-4'>
            {products.map((post) => (
                <div key={post.id} className='bg-white p-4 shadow-xl w-[300px] mb-3'>
                    <img src={post.image} alt={post.title} width={300} height={300} />
                    <h2 className='font-bold text-2xl text-center'>{post.title}</h2>
                    <h3><strong>Subtitle:</strong> {post.subtitle}</h3>
                    <strong className='text-gray-400'><span className='text-black'>Price:</span> {post.price} so'm</strong>
                    <div className='w-[300px]'>
                        <p><strong className='font-bold'>Description:</strong> {post.description}</p>
                    </div>
                    <p><strong className='font-bold'>Color:</strong> {post.color}</p>
                    <p><strong className='font-bold'>Rate:</strong> {post.rate}</p>
                    <p><strong className='font-bold text-black'>Size:</strong> {post.size}</p>
                </div>
            ))}
        </div>
    );
}

export default Products;


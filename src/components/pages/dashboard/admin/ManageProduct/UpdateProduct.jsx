import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchProductByIdQuery, useUpdateProductMutation } from '../../../../../redux/features/products/products.Api';
import { useSelector } from 'react-redux';
import TextInput from '../addProduct/TextInput';
import SelectInput from '../addProduct/SelectInput';
import UploadImage from '../addProduct/UploadImage';






const categories = [
    { label: 'Select Category', value: '' },
    { label: 'Accessories', value: 'accessories' },
    { label: 'Jeweller', value: 'jeweller' },
    { label: 'Cosmetics', value: 'cosmetics' },
    { label: 'Skin Care', value: 'skin-care' },
    { label: 'Dress', value: 'dress' },
]

const colors = [
    { label: 'Select Color', value: '' },
    { label: 'Black', value: 'black' },
    { label: 'Red', value: 'red' },
    { label: 'Gold', value: 'gold' },
    { label: 'Blue', value: 'blue' },
    { label: 'Silver', value: 'silver' },
    { label: 'Beige', value: 'beige' },
    { label: 'Green', value: 'green' },
]




const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const [product, setProduct] = useState({
        name: '',
        category: '',
        color: '',
        price: '',
        description: '',
        image: '',
    });

    const { data: productData, isLoading: isProductLoading, error: fetchError, refetch } = useFetchProductByIdQuery(id);
    const [newImage, setNewImage] = useState(null);
    const { name, category, color, description, image: imageUrl, price } = productData?.product || {};

    const [updateProduct, { isLoading:isUpdating, error: updateError }] = useUpdateProductMutation();

    useEffect(() => {
        if (productData) {
            setProduct({
                name: name || '',
                category: category || '',
                color: color || '',
                price: price || '',
                description: description || '',
                image: imageUrl || '',
            });
        }
    }, [productData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleImageChange = (image) => {
        setNewImage(image);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedProduct = {
            ...product,
            image: newImage ? newImage : product.image,
            author: user?._id,
        };

        try {
            await updateProduct({ id: id, ...updatedProduct }).unwrap();
            alert('Product Updated successfully');
            await refetch();
            navigate('/dashboard/manage-products');
        } catch (error) {
            console.error('Failed to update product:', error);
        }
    };

    if (isProductLoading) return <div>Loading...</div>;
    if (fetchError) return <div>Error fetching products! . . .</div>;

    return <div className='container mx-auto mt-8'>
        <h2 className='text-2xl font-bold mb-6'>Update Product</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>

            <TextInput
                label='Product Name'
                name="name"
                value={product.name}
                onChange={handleChange}
                type="text"
                placeholder="Product Name"
            ></TextInput>
            <SelectInput
                label='Category'
                name="category"
                value={product.category}
                onChange={handleChange}
                options={categories}
            />
            <SelectInput
                label='Colors'
                name="color"
                value={product.color}
                onChange={handleChange}
                options={colors}
            />

            <TextInput
                label='Price'
                name="price"
                value={product.price}
                onChange={handleChange}
                type="number"
                placeholder="$Price"
            />

            <UploadImage
                name="image"
                value={newImage || product.image}
                id="image"
                setImage={handleImageChange}
                placeholder="Upload image"
            />

            <div>
                <label htmlFor="description" className='block text-sm font-medium text-gray-700'>Description</label>

                <textarea name="description" id="description"
                    className='add-product-InputCSS'
                    value={product.description}
                    placeholder='Product Description write here'
                    onChange={handleChange}
                ></textarea>
            </div>

            <div>
                <button type='submit' className="add-product-btn">{isUpdating?'Updating...':'update Product'}</button>

            </div>
        </form>
    </div>;
};

export default UpdateProduct;

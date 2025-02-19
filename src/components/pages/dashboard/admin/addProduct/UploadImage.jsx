import React, { useState } from 'react';
import axios from 'axios';
import { getBaseUrl } from '../../../../../utils/baseURL';

const UploadImage = ({ name, setImage }) => {
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");

    // Base64 conversion function
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
               // console.log("Base64 Image:", fileReader.result); // Log base64 data
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => reject(error);
        });
    };

    // Request to upload a file
    const uploadSingleImage = (base64) => {
        setLoading(true);
        setError(""); // 

        axios.post(`${getBaseUrl()}/uploadImage`, { image: base64 })
            .then((res) => {
                const imageUrl = res.data;
                setUrl(imageUrl);
                alert("Image uploaded successfully");
                setImage(imageUrl);
            })
            .catch((error) => {
                console.error("Error uploading image:", error);
                setError("Failed to upload image. Please try again.");
            })
            .finally(() => setLoading(false));
    };

    // Image upload handler
    const uploadImage = async (event) => {
        const files = event.target.files;
        if (files.length === 0) {
            setError("No file selected");
            return;
        }

        const file = files[0];

        // Optional: You can add a file size check here, if needed
        if (file.size > 5 * 1024 * 1024) { // 5MB limit
            setError("File size exceeds 5MB. Please upload a smaller file.");
            return;
        }

        try {
            const base64 = await convertBase64(file);
            uploadSingleImage(base64);
        } catch (err) {
            setError("Error converting file to base64");
            console.error("Error converting file to base64:", err);
        }
    };

    return (
        <div>
            <label htmlFor={name}>Upload Image</label>
            <input
                type="file"
                name={name}
                id={name}
                onChange={uploadImage}
                className="add-product-InputCSS"
            />
            {loading && <div className="mt-2 text-sm text-blue-600">Product uploading...</div>}
            {error && <div className="mt-2 text-sm text-red-600">{error}</div>}
            {url && (
                <div className="mt-2 text-sm text-green-600">
                    <p>Image uploaded successfully!</p>
                    <img 
                        src={url} 
                        alt="uploaded-preview" 
                        style={{ width: 'auto', height: 'auto' }}  // Let the image show at its original size
                    />
                </div>
            )}
        </div>
    );
};

export default UploadImage;

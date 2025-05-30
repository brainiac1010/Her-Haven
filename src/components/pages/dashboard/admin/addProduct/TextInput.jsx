import React from 'react'

const TextInput = ({ label, name, value, onChange, type = "text", placeholder, required = false }) => {
    return (
        <div>
            <label htmlFor={name} className='block text-sm font-medium text-gray-700'>{label}</label>
            <input 
                type={type} 
                name={name} 
                id={name} 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className='add-product-InputCSS'
            />
        </div>
    )
}

export default TextInput

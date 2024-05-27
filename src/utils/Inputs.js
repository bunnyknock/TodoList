import React from 'react'

export default function Inputs({ type, name, value, onChange, placeholder, lable }) {
    return (
        <div  >
            {
                lable == false ? null : <div>
                    <label>{placeholder}</label>
                </div>
            }
            <div>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}

                />
            </div>
        </div>
    )
}

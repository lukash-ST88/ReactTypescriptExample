import React, {useState} from 'react'
import { IProduct } from '../models'
import axios from 'axios'

const productData: IProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 10,
        count: 10
    }
}
interface CreateProductProps{
    onCreate: (product: IProduct)=> void
}


export function CreateProduct({onCreate}: CreateProductProps){
    const [value, setValue] = useState('')
    const [error, setError] = useState('')


    async function submitHandler(event: React.FormEvent){
        event.preventDefault()

        if(value.trim().length === 0){
            setError('please enter valid title')
            return 
        }
        productData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
        onCreate(response.data)
    }

    const ChengeHandler = (event: any) =>{
        setValue(event.target.value)
    }

    return (
      <form onSubmit={submitHandler}>
        <input 
        type='text' 
        className='border py-2 px-4 mb-2' 
        placeholder='Enter product'
        value={value}
        onChange={ChengeHandler}>
        </input>
        {error && <p>{error}</p>}
        <button type='submit' className='py-2 px-4 border bg-yellow-400 hover:text-white'>Create</button>
      </form>
    )
}
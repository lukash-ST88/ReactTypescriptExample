import React, {useState} from 'react'
import { IProduct } from '../models'

interface ProductProps {
    product: IProduct 
}

export function Product (props: ProductProps){
    const [details, setDetails] = useState(false)
    const btnBgClassName = details ? 'bg-red-400' : 'bg-yellow-400'
    const btnClasses = ['py-2 px-4 border', btnBgClassName]

    return <div className='border py-4 px-4 rounded flex flex-col items-center'> 
    <img src={props.product.image} className='w-1/6' alt={props.product.title}/>
    <p>{props.product.title}</p>
    <p className='font-bold'>{props.product.price}</p>
    <button className={btnClasses.join(' ')} onClick={()=> setDetails(prev=> !prev)}>{details ? 'Hide details' : 'Show details'}</button>
    {details && 
    <div>{props.product.description}
    </div>
    }
    
    </div>
}
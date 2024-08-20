import { CreateProduct } from "../components/CreateProduct"
import Loader from "../components/Loader"
import { Modal } from "../components/Modal"
import { Product } from "../components/Product"
import { ModalContext } from "../context/ModalContext"
import { useProducts } from "../hooks/products"
import { IProduct } from "../models"
import React, {useContext} from 'react'

function ProductPage(){
    
  const {products, Loading, addProduct} = useProducts()
  const {modal, open, close} = useContext(ModalContext)

  function createHandler(product: IProduct){
    close()
    addProduct(product)
  }

  return    (

  <div className='container mx-auto max-w-2xl pt-5'> 
  {Loading && <Loader/>}
  <h1 className="text-3xl font-bold">
    {products.map((prod, index)=>{return <Product product={prod} key={prod.id}/>})}
  </h1>
  {modal && 
  <Modal title='Modal' onClose={close}>
    <CreateProduct onCreate={createHandler}/>
  </Modal>
  }
  <button className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2' onClick={open}></button>
  </div>)

}
export default ProductPage
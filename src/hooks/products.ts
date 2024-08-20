import React, { useState, useEffect } from "react"
import axios from 'axios'
import { IProduct } from "../models"

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [Loading, setLoading] = useState(true)

    function addProduct(product: IProduct) {
        setProducts(prev => [...prev, product])
    }

    async function fetchProducts() {
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
        setProducts(response.data)
        setLoading(false)
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    return { products, Loading, addProduct }
}
import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import axios from 'axios'

const baseUrl = 'http://localhost:8080/v1'

async function getProducts () {
    try {
        const response = await axios({
            url: `${baseUrl}/products`,
            method: 'GET'
        })

        return response
    } catch (e) {
        console.log(e)
    }
}

const ListProducts = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function loadProducts() {
            const response = await getProducts()
            console.log(response)
            return response
        }

        loadProducts()
    })
    return (
        isLoading
        ? <Loading />
        : 'Mostrar listado'   
    )
}

export default ListProducts
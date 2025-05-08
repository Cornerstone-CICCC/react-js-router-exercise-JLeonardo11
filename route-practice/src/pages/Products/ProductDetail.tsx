import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import type {Products} from "../../Types/product.types"
import { PulseLoader } from "react-spinners"

const ProductDetail =() =>{
    const [ Products, setProduct] = useState<Products | null>(null)
    const { id } = useParams()

    useEffect(() => {
      setProduct(null)
      const getTodoById = async () => {
        const res = await fetch(`https://dummyjson.com/todos/${id}`)
        const data = await res.json()
        setProduct(data)
      }
      getTodoById()
    }, [id])
  
    if (!Products) return <PulseLoader />
  
    return (
      <>
        <h1>product ID: {Products?.id}</h1>
        <ul>
          <li>Task: {Products?.title}</li>
          <li>description: {Products?.description }</li>
        </ul>
      </>
    )
  }
  
  export default ProductDetail
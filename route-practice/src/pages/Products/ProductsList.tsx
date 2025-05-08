import { useEffect, useState } from "react"
import type { Products } from "../../Types/product.types"
import { Link } from "react-router-dom"
import { PulseLoader } from "react-spinners"

const TodosList = () => {
  const [products, setProducts] = useState<Products[]>([])

  useEffect(() => {
    const getProducts
     = async () => {
      const res = await fetch(`https://dummyjson.com/products`)
      const data = await res.json()
      setProducts(data.todos)
    }
    getProducts()
  }, [])

  return (
    <>
      <h1 className="font-bold mb-3 text-lg">My To Do List</h1>
      {products.length <= 0 ? (
        <PulseLoader />
      ) : (
        <ul>
          {products.map(t => (
            <li key={t.id}>
              <span className="pr-3">{t.title   }</span>
              <Link className="underline text-red-500" to={`/todos/${t.id}`}>View To Do</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default TodosList
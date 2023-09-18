import { useState, useEffect } from "react"
import useGetItems from "@hooks/useGetItems"

const ItemsPage = () => {
  const [items, setItems] = useState<any[]>([])
  const [categories, setCategories] = useState(null)
  const [author, setAuthor] = useState(null)
  const [error, setError] = useState(false)
  const search = 'iphone-12'

  useEffect(() => {
    (
      async () => {
        await fetch('https://meli-challenge-backend-production.up.railway.app/api/items?q=' + search)
        .then(res => res.json())
        .then((result) => {
          setItems(result.items)
        })
        .catch(err => setError(true))
      }
    )()
  }, [])

  return (
    <div>
      {items?.map(item => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <img src={item.picture} alt={item.title} />
          <p>{item.price.amount}</p>
        </div>
      ))}
    </div>
  )
}

export default ItemsPage

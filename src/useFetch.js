import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() =>{
        fetch(url)
            .then(res => {
                        
                        if (!res.ok){
                            throw Error('Could not fetch data')
                        }
                        return res.json()

                    }
            )
            .then(data => {
                    setBlogs(data)
                    setIsPending(false)
                    setError(null)
                }   
            ).catch(e => {
                setError(e.message)
                setIsPending(false)
            })
    },[url])

    return {data, isPending, error}
}
 
export default useFetch;
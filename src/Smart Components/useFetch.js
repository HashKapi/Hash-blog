import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    

    useEffect(() =>{
        const abortControl = new AbortController()
        
        fetch(url, {signal: abortControl.signal})
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
                if (e.name === 'AbortError'){
                    console.log('fetch aborted')
                }else{
                    setError(e.message)
                    setIsPending(false)
                }
                
            })
            return () => abortControl.abort()
    },[url])

    return {data, isPending, error}
}
 
export default useFetch;
import { useState, useEffect } from "react"
import BlogList from "./BlogList"

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() =>{
        fetch("http://localhost:8000/blogs")
            .then(res => {
                        
                        if (!res.ok){
                            throw error('Could not fetch data')
                        }
                        res.json()

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
    },[])

    return ( 
        <div className="home">
            {error && <p>{error}</p>}
            {isPending && <p>loading your data...</p>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
     )
}
 
export default Home
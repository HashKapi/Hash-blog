const SubmitHandler = (e, history, title, body, author, setIsPending) => {
    e.preventDefault()
    const newBlog = {title, body, author}

    setIsPending(true)
    fetch("http://localhost:8000/blogs", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newBlog)
    }).then(() => {
        console.log('Blog added')
        setIsPending(false)
        history.push('/')
    })
}
 
export default SubmitHandler;
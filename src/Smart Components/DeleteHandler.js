const HandleClick = (url, history) => {
    
    fetch(url,{
            method: 'DELETE'
        }).then(() => {
                    history.push('/')
                } 
    )

}
 
export default HandleClick;
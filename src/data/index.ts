
// const URL = 'https://api.github.com/users'
const URL = 'https://jsonplaceholder.typicode.com/posts' 

const fetchData = async (url: string) => {

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return(
        data
    )
}

export const data:any = async  (userName:string) =>{
    const newURL = `${URL}/${userName}`
    return await fetchData(newURL)
}
import { useEffect, useState } from "react"

const API_KEY = import.meta.env.VITE_API_KEY

async function  getNews (category){
    let URL = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&apikey=${API_KEY}`
    const resData = await fetch(URL)
    const data  = await resData.json()
    return data
}

async function searchNews(searchTerm){
    let URL = `https://gnews.io/api/v4/search?q=${searchTerm}&lang=en&country=in&apikey=${API_KEY}`
    const resData = await fetch(URL)
    const data  = await resData.json()
    return data
}


export default function useFetch(){
    const [isFetching, setIsFetching] = useState(false)
    const [newsData, setNewsData] = useState([])
    const [error, setError] = useState(false)
    const [type, setType] = useState({})

useEffect(()=>{
    async function fetchNews(){
        try{
            if(type.category){

                setIsFetching(true)
                const data = await getNews(type.category)
                setNewsData(data)

            }else if(type.searchTerm){

                setIsFetching(true)
                const data = await searchNews(type.searchTerm)
                setNewsData(data)

            }
            setIsFetching(false)
        }catch(e){
            setError(e.message)
        }
    }

    fetchNews()

},[type])


    return {
        isFetching,
        newsData,
        error,
        setType
    }
    
}
import Header from "./components/Header"
import Buttonlist from "./components/Buttonlist"
import NewsSection from "./components/NewsSection"
import useFetch from "./hooks/useFetch"
import Loader from "./components/Loader"
import { useEffect, useState } from "react"
import PaginationBtns from "./components/PaginationBtns"

const numOfNewsPerPage = 3

function App() {

  const {newsData, error, setType, isFetching} = useFetch()
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(()=>{
    setType({category:"general"})
  },[])

  function searchHandler(value){
    setCurrentPage(1)
    setType({searchTerm:value})
  }
  function topHeadlines(category){
    setCurrentPage(1)
    setType({category:category})
  }



  let currentPageNews = []

  if(newsData.articles){
    currentPageNews = newsData.articles.filter((_,i)=>{
      return i>=(numOfNewsPerPage*(currentPage-1))  && i<=(numOfNewsPerPage*(currentPage-1))+numOfNewsPerPage-1
    })
  }


  return (
      <>
      <Header searchHandler={searchHandler}/>
      <Buttonlist searchHandler={searchHandler} topHeadlines={topHeadlines} />
      {isFetching?<Loader/>:<NewsSection data={currentPageNews}/>}
      {error && <p>something went wrong</p>}
      <PaginationBtns changePage={setCurrentPage} currentPage={currentPage} totalNumberOfPages={Math.ceil(newsData?.articles?.length/numOfNewsPerPage)}/>
      </>
  )
}

export default App

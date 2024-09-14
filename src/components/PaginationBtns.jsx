

export default function PaginationBtns({changePage, currentPage, totalNumberOfPages}){
    return(
       
<nav aria-label="Page navigation example" className="mt-5 pb-5 flex justify-center">
  <ul className="inline-flex -space-x-px text-sm">
    <li>
      <button onClick={()=>{
        changePage(currentPage-1)
        window.scrollTo(0, 0)
        }} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed" disabled={currentPage===1} >Previous</button>
    </li>
    <li>
      <button onClick={()=>{
        changePage(currentPage+1)
        window.scrollTo(0,0)
      }} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed" disabled={currentPage===totalNumberOfPages} >Next</button>
    </li>
  </ul>
</nav>

    )
}
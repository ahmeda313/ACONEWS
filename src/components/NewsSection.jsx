import SingleNews from "./SingleNews"

export default function NewsSection({data}){
    // console.log(data[0].content)
    return(
        <>
        <section className="mt-5 flex flex-col items-center px-2">

            {data.map(news=>(
                <SingleNews 
                key={news.title}
                title={news.title} 
                description={news.description}
                imgUrl={news.image}
                source={news.source.name}
                date={news.publishedAt}
                moreUrl={news.url}
                /> 
            ))}

        </section>
        </>
    )
}


export default function SingleNews({title, imgUrl, description, source, date, moreUrl}){

    const resDate = new Date(date)


    return(
        <div className="my-3 h-fit sm:w-2/3 md:w-4/5 lg:w-2/3 md:flex bg-slate-900 rounded-md">
        <div className="lg:w-2/3">
            <img className="h-full object-fit rounded-t-md md:rounded-none md:rounded-s-md" src={imgUrl} alt={title} />
        </div>
        <div className="p-3 flex flex-col justify-around">
            <div>
                <h1 className="font-medium">{title}</h1>
                <p className="font-thin mt-3">{description}</p>
            </div>
            <div>
                <ul className="text-xs text-slate-600 mt-3 mb-1 lg:mt-4 lg:mb-2 gap-5">
                    <li>{source}</li>
                    <li>Date {resDate.toLocaleDateString()}</li>
                    <li>Time {resDate.toLocaleTimeString()}</li>
                </ul>
                <a className="text-blue-400 hover:text-fuchsia-950 cursor-pointer" href={moreUrl} target="_blank">Read more</a>
            </div>

        </div>

    </div>
    )
}
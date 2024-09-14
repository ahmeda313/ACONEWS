

export default function Buttonlist({searchHandler, topHeadlines}){
    return(
    <section className="mt-5 flex justify-around px-2">
    <ul className="p-5 flex gap-3 overflow-x-scroll no-scrollbar">
        <li>
            <input type="radio" value="general" id="All" name="topic" className="peer" defaultChecked hidden onChange={()=>topHeadlines("general")}/>
            <label htmlFor="All" className="font-medium bg-slate-700 hover:bg-slate-600 peer-checked:bg-white peer-checked:text-black cursor-pointer px-2 py-0.5 rounded-md"> All</label>
        </li>
        <li>
            <input type="radio" value="technology" id="tech" name="topic" className="peer" hidden onChange={()=>topHeadlines("technology")}/>
            <label htmlFor="tech" className="font-medium bg-slate-700 hover:bg-slate-600 peer-checked:bg-white peer-checked:text-black cursor-pointer px-2 py-0.5 rounded-md"> Tech</label>
        </li>
        <li>
            <input type="radio" value="Bollywood" id="Bollywood" name="topic" className="peer" hidden onChange={()=>searchHandler("Bollywood")}/>
            <label htmlFor="Bollywood" className="font-medium bg-slate-700 hover:bg-slate-600 peer-checked:bg-white peer-checked:text-black cursor-pointer px-2 py-0.5 rounded-md"> Bollywood</label>
        </li>
        <li>
            <input type="radio" value="Ai" id="Ai" name="topic" className="peer" hidden onChange={()=>searchHandler("Ai")}/>
            <label htmlFor="Ai" className="font-medium bg-slate-700 hover:bg-slate-600 peer-checked:bg-white peer-checked:text-black cursor-pointer px-2 py-0.5 rounded-md"> Ai</label>
        </li>
        <li>
            <input type="radio" value="Stocks" id="Stocks" name="topic" className="peer" hidden onChange={()=>searchHandler("Stocks")}/>
            <label htmlFor="Stocks" className="font-medium bg-slate-700 hover:bg-slate-600 peer-checked:bg-white peer-checked:text-black cursor-pointer px-2 py-0.5 rounded-md"> Stocks</label>
        </li>
        <li>
            <input type="radio" value="sports" id="Sports" name="topic" className="peer" hidden onChange={()=>topHeadlines("sports")}/>
            <label htmlFor="Sports" className="font-medium bg-slate-700 hover:bg-slate-600 peer-checked:bg-white peer-checked:text-black cursor-pointer px-2 py-0.5 rounded-md"> Sports</label>
        </li>
        <li>
            <input type="radio" value="world" id="world" name="topic" className="peer" hidden onChange={()=>topHeadlines("world")}/>
            <label htmlFor="world" className="font-medium bg-slate-700 hover:bg-slate-600 peer-checked:bg-white peer-checked:text-black cursor-pointer px-2 py-0.5 rounded-md"> World</label>
        </li>
        <li>
            <input type="radio" value="entertainment" id="Entertainment" name="topic" className="peer" hidden onChange={()=>topHeadlines("entertainment")}/>
            <label htmlFor="Entertainment" className="font-medium bg-slate-700 hover:bg-slate-600 peer-checked:bg-white peer-checked:text-black cursor-pointer px-2 py-0.5 rounded-md"> Entertainment</label>
        </li>
        <li>
            <input type="radio" value="Politics" id="Politics" name="topic" className="peer" hidden onChange={()=>searchHandler("Politics")}/>
            <label htmlFor="Politics" className="font-medium bg-slate-700 hover:bg-slate-600 peer-checked:bg-white peer-checked:text-black cursor-pointer px-2 py-0.5 rounded-md"> Politics</label>
        </li>
        <li>
            <input type="radio" value="Climate" id="Climate" name="topic" className="peer" hidden onChange={()=>searchHandler("Climate")}/>
            <label htmlFor="Climate" className="font-medium bg-slate-700 hover:bg-slate-600 peer-checked:bg-white peer-checked:text-black cursor-pointer px-2 py-0.5 rounded-md"> Climate</label>
        </li>
        <li>
            <input type="radio" value="health" id="Health" name="topic" className="peer" hidden onChange={()=>topHeadlines("health")}/>
            <label htmlFor="Health" className="font-medium bg-slate-700 hover:bg-slate-600 peer-checked:bg-white peer-checked:text-black cursor-pointer px-2 py-0.5 rounded-md"> Health</label>
        </li>
        <li>
            <input type="radio" value="Cricket" id="Cricket" name="topic" className="peer" hidden onChange={()=>searchHandler("Cricket")}/>
            <label htmlFor="Cricket" className="font-medium bg-slate-700 hover:bg-slate-600 peer-checked:bg-white peer-checked:text-black cursor-pointer px-2 py-0.5 rounded-md"> Cricket</label>
        </li>
    </ul>
    </section>)
}
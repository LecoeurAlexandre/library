import "./SearchScreen.css"

export function SearchScreen () {
    return (
        <div id="searchContainer">
            <div id="searchSubContainer">
                <div id="search-input-div">
                    <form>
                        <input type="search"/>
                        <button type="submit"><img src="./search.svg"/></button>
                    </form>
                </div>

                <div id="search-result-input">


                </div>
            </div>
        </div>
    )
}
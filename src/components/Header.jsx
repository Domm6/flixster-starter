import "./Header.css"

function Header() {
    return(

        <div className="header">
            <form action="" className="header-form">
                <input type="text" />
                <button type="submit">Submit</button>
            </form>
            <h1>Flixster</h1>
            <form action="">
                <label for="movies">Sort by:</label>
                <select name="header-sort" id="">

                </select>
            </form>

        </div>

    )
}

export default Header
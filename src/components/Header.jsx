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
                <select name="header-sort" id="">Sort by</select>
            </form>

        </div>

    )
}

export default Header
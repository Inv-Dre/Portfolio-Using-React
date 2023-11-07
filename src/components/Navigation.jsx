import { Link, useLocation } from 'react-router-dom';


function Navigation () {
    const currentPage = useLocation().pathname;

    return (
        <nav>
            <ul>
                <li>
                    <Link
                    to='/About'
                    className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
                    >About Me</Link>   
                </li>
                <li>
                    <Link
                    to='/Portfolio'
                    className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                    >Portfolio</Link>
                </li>
                <li>
                <Link
                    to='/Contact'
                    className={currentPage === '/Contact-me' ? 'nav-link active' : 'nav-link'}
                    >Contact Me</Link>
                </li>
                <li>
                <Link
                    to='/Resume'
                    className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                    >Resume</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
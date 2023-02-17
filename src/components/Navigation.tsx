import {Link, withRouter} from 'react-router-dom';

const Navigation = ({history}: any) => {
    return (
        <ul>
            <li>
                <Link to="/"><span className={history.location.pathname === '/' ? 'menu--active': ''}>Products</span></Link>
            </li>
            <li>
                <Link to="/member-benefit"><span className={history.location.pathname === '/member-benefit' ? 'menu--active': ''}>Member Benifits</span></Link>
            </li>
            <li>
                <Link to="/find-program"><span className={history.location.pathname === '/find-program' ? 'menu--active': ''}>Find Program</span></Link>
            </li>
            <li>
                <Link to="/about"><span className={history.location.pathname === '/about' ? 'menu--active': ''}>About </span></Link>
            </li>
        </ul>
    );
}

export default withRouter(Navigation);

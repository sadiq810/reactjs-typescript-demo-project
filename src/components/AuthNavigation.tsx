import {Link, withRouter} from 'react-router-dom';

const AuthNavigation = ({history}: {history: any}) => {

    return (
        <ul>
            <li>
                <Link to="/programs"><span className={history.location.pathname === '/programs' ? 'menu--active': ''}>PROGRAMS</span></Link>
            </li>
            <li>
                <Link to="/my-profile"><span className={history.location.pathname === '/my-profile' ? 'menu--active': ''}>PROFILE</span></Link>
            </li>
            <li>
                <Link to="/my-applications"><span className={history.location.pathname === '/my-applications' ? 'menu--active': ''}>MY APPLICATION</span></Link>
            </li>
            <li>
                <Link to="/loans"><span className={history.location.pathname === '/loans' ? 'menu--active': ''}>LOANS </span></Link>
            </li>
            <li>
                <Link to="/payments"><span className={history.location.pathname === '/payments' ? 'menu--active': ''}>PAYMENTS </span></Link>
            </li>
        </ul>
    );
}

export default withRouter(AuthNavigation);

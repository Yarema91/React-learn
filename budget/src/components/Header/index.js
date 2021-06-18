import { Link } from "react-router-dom";
import { ThemeSwitch } from '../ThemeSwitch';
import { Nav } from './styles';


const Header = () => (
    <div>
        <Nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/statistic">Statistic</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </Nav>
        <ThemeSwitch/>
    </div>
)

export default Header;
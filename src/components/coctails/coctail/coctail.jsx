import './coctail.scss';
import { Link } from 'react-router-dom';

export default function Coctail({ coctail }) {
    return (
        <Link to={`/coctail/${coctail.idDrink}`} className="coctail">
            <img src={coctail.strDrinkThumb} alt=""/>
            <p>
                {coctail.strDrink}
            </p>
        </Link>
    )
}
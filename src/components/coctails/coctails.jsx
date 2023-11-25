import './coctails.scss';
import getCoctail from '../../services/getCoctail.js';
import { useState, useEffect, useContext } from 'react';
import Coctail from './coctail/coctail.jsx';
import { CoctailsContext } from '../../services/contexts/coctailscontext';

export default function Coctails() {

    useEffect(() => {
        getCoctail()
            .then((data) => {
                setContextCoctails(data.drinks)
            })
            .catch((error) => console.log(error))
    }, []);

    const { contextCoctails, setContextCoctails } = useContext(CoctailsContext);

    return (
        <div className="coctails">
            {
                contextCoctails && contextCoctails.length ? 
                contextCoctails.map((coctail) => <Coctail key={coctail.idDrink} coctail={coctail}/> ) : <p>Empty</p>
            }
        </div>
    )
}
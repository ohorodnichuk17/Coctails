import { useHistory } from 'react-router';
import Button from '../button/button';
import './error.scss';

export default function Error(){

    let history = useHistory();

    function handleClick(){
        history.push('/');
    }

    return(
        <div className="error">
            <h1>
                Error <br/>
                data not found
            </h1>
            <Button text='На главную' handleClick={handleClick} />
        </div>
    )
}
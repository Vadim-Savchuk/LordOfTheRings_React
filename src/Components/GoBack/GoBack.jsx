import { useNavigate } from 'react-router-dom'
import './GoBack.css';

function GoBack({color}) {
    const navigate = useNavigate({color});

    function handleGoBack() {
        navigate(-1)
    }

    return (
        <button className={`button ${color}`} onClick={handleGoBack}>Go Back</button>
    )
}

export default GoBack;
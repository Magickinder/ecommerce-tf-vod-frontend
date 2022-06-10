import "../styles/PaymentSuccess.css";
import CheckIcon from '@mui/icons-material/Check';
import SvgIcon from '@mui/material/SvgIcon';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 
export default function PaymentSuccess() {
    const [timer, setTimer] = useState(10);
    let navigate = useNavigate();

    useEffect( () => {
        if(timer === 0) {
            navigate("/mainPage");
        } else {
            setTimeout(() => setTimer(timer - 1), 1000);
        }
    }, [timer]);

    return(
        <div className="success-container">
            <SvgIcon sx={{ width: "15vw", height: "auto", backgroundColor: "green", borderRadius: "10rem" }}>
                <CheckIcon/>
            </SvgIcon>
            <p>Płatność powiodła się! Za {timer} sekund zostaniesz przeniesiony na stronę główną.</p>
            <p className="success-redirect" onClick={() => navigate("/mainPage")}>Jeśli automatyczne przeniesienie nie zadziałało, kliknij tutaj by przejść na stronę główną.</p>
        </div>
    );
}
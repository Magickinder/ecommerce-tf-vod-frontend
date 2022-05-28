import Header from '../Header';
import "../styles/HelpPage.css";

export default function HelpPage(props) {
    return(
        <>
            <Header isLoggedIn={props.isLoggedIn} tableToRender={props.tableToRender} setTableToRender={props.setTableToRender}></Header>
            <div className="help-container">
                <p>W razie jakichkolwiek problemów prosimy o kontakt na podany adres email: </p>
                <a href="mailto:topfilms@gmail.com">topfilms@gmail.com</a>
            </div>
        </>
    );
}
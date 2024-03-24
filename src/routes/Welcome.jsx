import logo from '../images/kd-rework-logo.png';

const Welcome = () => {
    return (
        <>
            <header className="App-header">
                <img src={logo} className="logo" alt="logo" />
            </header>
            <p>
                Welcome to the KDRework. On the left site you have some buttons to read the rules.
            </p>
            <p>
                If you have any further questions, please contact an Administrator.
            </p>
        </>
    );
}

export default Welcome;

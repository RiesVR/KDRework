import logo from '../images/kd-rework-logo.png';

const Welcome = () => {
    return (
        <>
            <header className="App-header">
                <img src={logo} className="logo" alt="logo" />
            </header>
            <p>
                Welcome to the KDRework Rules. Here you can find all the rules for the KDRework server.
            </p>
            <p>
                If you have any further questions, please contact us on our Discord server.
            </p>
        </>
    );
}

export default Welcome;
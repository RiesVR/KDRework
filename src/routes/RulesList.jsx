import logo from '../images/kd-rework-logo.png';

const RulesList = ({ data, prefixNumber }) => {
    return (
        <>
            <header className="App-header">
                <img src={logo} className="logo" alt="logo" />
            </header>
            <ul>
                <h2 className='title'>{data.name}</h2>
                {data.rules.map((rule, index) => (
                    <li key={index} className='rule--block'>
                        <h3 className='title'>{rule.title}</h3>
                        <p>{rule.description}</p>
                        {rule.subrules && rule.subrules.length > 0 && (
                            <ul>
                                {rule.subrules.map((subRule, subIndex) => (
                                    <li key={subIndex} className='sub-rule--block'>
                                        <p className='sub-rule--title'><span className='numbers'>{subIndex + 1}.</span> {subRule.title}</p>
                                        <p className='sub-rule--description'>{subRule.description}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default RulesList;

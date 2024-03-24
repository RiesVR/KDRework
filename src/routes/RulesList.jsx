import React from 'react';
import logo from '../images/kd-rework-logo.png';
import discordLogo from '../images/discord-logo.svg';

const prefixNumber = 1;

const RulesList = ({ data }) => {
    return (
        <>
            <header className="App-header">
                <img src={logo} className="logo" alt="logo" />
            </header>
            <ul>
                <h2 className='title'><span className='numbers'>{prefixNumber}</span> {data.name}</h2>
                {data.rules.map((rule, index) => (
                    <li key={index} className='rule--block'>
                        <h3 className='title'><span className='numbers'>{prefixNumber}.{index + 1}</span> {rule.title}</h3>
                        <p>{rule.description}</p>
                        {rule.subrules && rule.subrules.length > 0 && (
                            <ul>
                                {rule.subrules.map((subRule, subIndex) => (
                                    <li key={subIndex} className='sub-rule--block'>
                                        <p><span className='numbers'>{prefixNumber}.{index + 1}.{subIndex + 1}</span> {subRule.title}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>

            <footer className="App-footer">
                <p className='c2a'>Join our Discord server</p>
                <a href="https://discord.gg/qhv4xJB62e" >
                    <img src={discordLogo} className="logo--discord" alt="logo Discord" />
                </a>
            </footer>
        </>
    );
}

export default RulesList;

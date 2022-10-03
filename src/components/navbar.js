import { useState } from 'react';
import './components.css';

const Navbar = () => {
    const [title, setTitle] = useState('New Questionnaire');
    const [isLogin, setIsLogin] = useState(true);
    return (
        <nav className="navbar">
            <div className='nav-side start'>
                <div className='logo'>
                    <img src='/logo.svg'/>
                </div>
            </div>
            <div className='nav-center center'>
                <input className='title' type='text' value={title} onChange={(e) => {setTitle(e.target.value)}}/>
            </div>
            <div className='nav-side end'>
                { !isLogin ? <div className='user-email'>tom@fueled.com</div> : <></>}
                <button className='btn-login' onClick={() => setIsLogin(p=>!p)}>{isLogin ? "LOG IN" : "LOG OUT"}</button>
            </div>
        </nav>
    )
}

export default Navbar;
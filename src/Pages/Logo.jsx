import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({ active }) => {
    return (
        <Link to="/home">
            <div style={{
                border: "1px solid white",
                width: "50px",
                height: '50px',
                transform: "rotate(180deg)",
                boxSizing: "border-box"
            }} className='nr'>
                <div className='nr1'>
                    <div style={{
                        width: "50px",
                        height: '50px',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        transform: "rotate(45deg)",
                    }} className='nr2' >NR</div>
                </div>
            </div>
        </Link>
    )
}

export default Logo
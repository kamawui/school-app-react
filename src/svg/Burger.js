import React from "react";

function Burger({isOpen}) {
    return (
        <>
            {isOpen ?
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 1024 1024">
                    <path fill="#e5e5e5"
                          d="M764.288 214.592L512 466.88L259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512L214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"/>
                </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24">
                    <path
                        fill="none"
                        stroke="#e5e5e5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 6h18M3 12h18M3 18h18"
                    />
                </svg>
            }
        </>
    )
}

export default Burger;
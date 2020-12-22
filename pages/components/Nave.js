import React from 'react'

export const Nave = () => {
    return (
        <div>

            <nav className="navbar navbar-dark bg-dark"
            style={{
                backgroundColor: 'blueviolet',
                width: '100%',
                height: '32px',
                display: 'inline-block',
                
                
                
                }}> 
                
                <a className="btn btn-primary" href="#"
                    style={{
                    marginLeft: '20px',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '25px',
                    
                    }}>Home</a>

                <a href='Sobre'
                    style={{
                    marginLeft: '20px',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '25px',
                    
                    }}>Sobre</a>

                <a href='Contato'
                    style={{
                    marginLeft: '20px',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '25px',
                    
                    }}>Contato</a>
                
            </nav>
        </div>
    )
}

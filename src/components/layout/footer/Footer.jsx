import React from 'react';

const styles = {
    backgroundColor: 'lightgray',
    height: '30px',
    width: '100%',
    position: 'fixed',
    bottom: 0
};

export function Footer() {
    return (
        <div className="footer bg-light" style={styles}>
            Footer 
        </div>
    );
}
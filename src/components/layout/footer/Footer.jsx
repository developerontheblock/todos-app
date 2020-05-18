import React from 'react';

const styles = {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '60px',
    lineHeight: '60px',
    backgroundColor: '#f5f5f5'
};


export function Footer() {
    return (
        <div className="footer" style={styles}>
            <div className="container">
                <span className="text-muted">
                    Faculty number: 1601681033
                </span>
            </div>

        </div>

    );
}
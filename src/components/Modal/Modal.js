import React from 'react';

const modal = props => {
    return (
        <div className='modal display-block'>
            <section className="modal-main">
                {props.children}
            </section>
        </div>
    );

}

export default modal;
import React from 'react';

const modal = ({ handleSave, handleClose, show, children }) => {

    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button onClick={handleClose} className='btn btn-danger'>Cancel</button>
                <button onClick={handleSave} className='btn btn-primary'>Save</button>
            </section>
        </div>
    );

}

export default modal;
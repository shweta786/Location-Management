import React, { PureComponent } from 'react';
// import styles from './Add-Edit-Location.module.css';

export default class AddEditLocation extends PureComponent {

    render() {
        return (
            <div>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate"></input>
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate"></input>
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate"></input>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate"></input>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}
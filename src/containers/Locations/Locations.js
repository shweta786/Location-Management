import React, { Component } from 'react'
import { AccessDB } from 'react-indexed-db';
import styles from './Locations.module.css'
import NoLocation from '../../components/No-Location/No-Location';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal'
import AddEditLocation from '../Add-edit-location/Add-Edit-Location'

class Locations extends Component {

    state = {
        locations: [],
        showAddEditModal: false,
        showFacilityTimeModal: false
    }

    addLocationClickHandler = () => {
        // toggling showAddEditModal from its last state 
        this.setState((prevState, props) => {
            return {
                locations: [],
                showAddEditModal: !prevState.showAddEditModal,
                showFacilityTimeModal: false
            }
        });
    }

    saveLocationHandler = () => {

    }

    render() {
        return (
            <AccessDB objectStore="locations">
                {({ getAll }) => {
                    getAll().then(
                        locationFromDB => {
                            this.setState({ locations: locationFromDB });
                        },
                        error => {
                            console.log(error);
                        }
                    );
                    return (
                        <div className={styles.container}>
                            {this.state.locations.map(loc => (
                                <span>{loc}</span>
                            ))}
                            <Header onAddLocClick={this.addLocationClickHandler}></Header>
                            <NoLocation></NoLocation>

                            <Modal handleSave={this.saveLocationHandler}
                                handleClose={this.addLocationClickHandler}
                                show={this.state.showAddEditModal}>
                                <AddEditLocation></AddEditLocation>
                            </Modal>
                        </div>
                    );
                }}
            </AccessDB>
        );
    }
}

export default Locations;
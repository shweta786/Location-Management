import React, { Component } from 'react'
import { AccessDB } from 'react-indexed-db';
import styles from './Locations.module.css'
import NoLocation from '../../components/No-Location/No-Location';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import AddEditLocation from '../Add-edit-location/Add-Edit-Location';
import LocationListing from '../Location-Listing/Location-Listing'

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

    closeAddEditModal = () => {
        this.setState({
            showAddEditModal: false,
        })
    }

    saveLocationHandler = (location) => {
        console.log('from Save ' + location);
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
                            {
                                !this.state.locations || this.state.locations.length < 1
                                    ? <NoLocation></NoLocation>
                                    : this.state.locations.map(location =>
                                        <LocationListing location={location}></LocationListing>
                                    )
                            }
                            <Modal
                                handleSave={this.saveLocationHandler}
                                handleClose={this.closeAddEditModal}
                                show={this.state.showAddEditModal}>
                                <AddEditLocation>
                                </AddEditLocation>
                            </Modal>
                        </div>
                    );
                }
                }
            </AccessDB >
        );
    }
}

export default Locations;
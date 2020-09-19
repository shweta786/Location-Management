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
        // .add({
        //     'abc': 'locationName', 'i m address1': 'address1',
        //     'i m address2': 'address2', 'erg': 'suite',
        //     'Ohio': 'city', 'Cincinnati': 'state',
        //     '103044': 'zipCode', '999234999': 'phone',
        //     'xyz': 'timeZone', 'fefef': 'facilityTime',
        //     'www': 'appointment'
        // }).then(
        //     event => {
        //         console.log('ID Generated: ', event.target.result);
        //     },
        //     error => {
        //         console.log(error);
        //     }
        // );
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
                            <AccessDB objectStore="locations">
                                {({ add }) => {
                                    const handleClick = () => {
                                        add({
                                            'locationName': 'locationName', 'address1': 'address1',
                                            'address2': 'address2', 'suite': 'suite',
                                            'city': 'city', 'state': 'state',
                                            'zipCode': '103044', 'phone': '2847894289',
                                            'timeZone': 'timeZone', 'facilityTime': 'facilityTime',
                                            'appointment': 'appointment'
                                        }).then(
                                            event => {
                                                console.log('ID Generated: ', event.target.result);
                                            },
                                            error => {
                                                console.log(error);
                                            }
                                        );
                                    };

                                    return <Modal
                                        handleSave={handleClick}
                                        handleClose={this.closeAddEditModal}
                                        show={this.state.showAddEditModal}>
                                        <AddEditLocation>
                                        </AddEditLocation>
                                    </Modal>
                                    // return <button onClick={handleClick}>Add</button>;
                                }}

                            </AccessDB>;

                        </div>
                    );
                }
                }
            </AccessDB >
        );
    }
}

export default Locations;
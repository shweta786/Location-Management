import React, { Component } from 'react'
import { AccessDB } from 'react-indexed-db';
import styles from './Locations.module.css'
import NoLocation from '../../components/No-Location/No-Location';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import AddEditLocation from '../Add-edit-location/Add-Edit-Location';
import LocationListing from '../Location-Listing/Location-Listing'
import Aux from '../../hoc/Auxilliary'

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
                            
                            <Header onAddLocClick={this.addLocationClickHandler}></Header>
                            {
                                !this.state.locations || this.state.locations.length < 1
                                    ? <NoLocation></NoLocation>
                                    : <Aux>
                                        <div className='row loc-list'>
                                            <div className='col s1'>
                                            </div>
                                            <div className='col s3'>
                                                <b>Location Name</b>
                                            </div>
                                            <div className='col s3'>
                                                <b>Address</b>
                                            </div>
                                            <div className='col s3'>
                                                <b>Phone No.</b>
                                            </div>
                                            <div className='col s2'>
                                            </div>
                                        </div>
                                        {this.state.locations.map((loc, index) =>
                                            <LocationListing
                                                location={loc}
                                                index={index}
                                                key={loc.locationId} />)
                                        }
                                        <div className='row loc-list'>
                                            <span>
                                                Items Per Page 10
                                            </span>
                                        </div>
                                    </Aux>
                            }

                            <AccessDB objectStore="locations">
                                {({ add }) => {
                                    const saveLocationHandler = (locationToAdd) => {
                                        add({
                                            'locationName': 'locationName', 'address1': 'address1',
                                            'address2': 'address2', 'suite': 'suite',
                                            'city': 'city', 'state': 'state',
                                            'zipCode': '103044', 'phone': '2847894289',
                                            'timeZone': 'timeZone', 'facilityTime': 'facilityTime',
                                            'appointment': 'appointment'
                                        }).then(
                                            event => {
                                                console.log('ID Generated: ', event);
                                            },
                                            error => {
                                                alert('Error occurred while saving data in DB');
                                                console.log(error);
                                            }
                                        );
                                    };

                                    return <Modal
                                        handleSave={saveLocationHandler}
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
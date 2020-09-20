import React from 'react';
import { IndexedDB } from 'react-indexed-db';
import './App.css';
import Locations from '../containers/Locations/Locations'

function App() {

  return (
    
    // Initializing indexed DB
    <IndexedDB name="MyDB"
      version={1}
      objectStoresMeta={[
        {
          store: 'locations',
          storeConfig: { keyPath: 'locationId', autoIncrement: true },
          storeSchema: [
            { name: 'locationName', keypath: 'locatioName', options: { unique: false } },
            { name: 'address1', keypath: 'address1', options: { unique: false } },
            { name: 'address2', keypath: 'address2', options: { unique: false } },
            { name: 'suite', keypath: 'suite', options: { unique: false } },
            { name: 'city', keypath: 'city', options: { unique: false } },
            { name: 'state', keypath: 'state', options: { unique: false } },
            { name: 'zipCode', keypath: 'zipCode', options: { unique: false } },
            { name: 'phone', keypath: 'phone', options: { unique: false } },
            { name: 'timeZone', keypath: 'timeZone', options: { unique: false } },
            { name: 'facilityTime', keypath: 'facilityTime', options: { unique: false } },
            { name: 'appointment', keypath: 'appointment', options: { unique: false } }
          ]
        }
      ]}>
      <Locations></Locations>
    </IndexedDB>
  );
}

export default App;

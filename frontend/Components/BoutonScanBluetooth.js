import React, {Component} from 'react';


import RNBluetoothClassic, {
  BluetoothDevice
} from 'react-native-bluetooth-classic';
import { Button, PermissionsAndroid } from 'react-native';

class BoutonScanBluetooth extends Component{
    constructor(props){
        super(props);
        this.scanBluetooth = this.scanBluetooth.bind(this);
    }

    async requestAccessFineLocationPermission() {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Access fine location required for discovery',
            message:
              'In order to perform discovery, you must enable/allow ' +
              'fine location access.',
            buttonNeutral: 'Ask Me Later"',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK'
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    };

    async scanBluetooth(){
        try {

            let granted = await this.requestAccessFineLocationPermission();

            alert(`Autorisation : ${granted}`);

            let devices = await RNBluetoothClassic.startDiscovery();

            alert(`J'ai trouvé ${devices.length} appareils non apparaillés`);

            //devices.forEach((item, index)=>{alert(item)});
            alert(Object.keys(devices[0]));

            let allNames = devices.map(x => x.name);
            let allNamesText = allNames.join("\n");

            alert(allNamesText);
        } catch (err) {
          console.log(err);
            alert(err);
        }

    }

        render(){
            return(
                <Button 
                onPress={this.scanBluetooth}
                title="Scan Bluetooth"
                color="#f00"
                />
            )
        }
}


export default BoutonScanBluetooth;
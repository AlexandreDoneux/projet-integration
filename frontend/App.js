import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RNBluetoothClassic, {
  BluetoothDevice
} from 'react-native-bluetooth-classic';

import BoutonScanBluetooth from './Components/BoutonScanBluetooth';


//-------------------------------------------------------------------------------------------------------------------------------------
//Importations faites
import { Button } from 'react-native';

//-------------------------------------------------------------------------------------------------------------------------------------


class BluetoothOn extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        
    }

}



render() {
  return (
    <BoutonScanBluetooth></BoutonScanBluetooth>
  );
}
}




export default BluetoothOn;
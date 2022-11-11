import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RNBluetoothClassic, {
  BluetoothDevice
} from 'react-native-bluetooth-classic';



//-------------------------------------------------------------------------------------------------------------------------------------
//Importations faites
import { Button } from 'react-native';

//-------------------------------------------------------------------------------------------------------------------------------------


class BluetoothOn extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        enabled : false
    }
    this.testBluetoothEnabled = this.testBluetoothEnabled.bind(this);
}

  async testBluetoothEnabled(){
      try {
          enabled = await RNBluetoothClassic.isBluetoothEnabled();
          //enabled = true;
          this.setState({enabled});
          alert(enabled);
      } catch (err) {
        console.log(err);
          alert(err);
      }
  }

// deux manières : utiliser une fonction félchée (comme ici en bas) ou bind (dans constructor)
/*
testBluetoothEnabled = async () => {
      try {
          //await enabled = RNBluetoothClassic.isBluetoothEnabled();
          enabled = true;
          this.setState({enabled});
          alert(enabled);
      } catch (err) {
        console.log(err);
          alert(err);
      }
  }
*/


render() {
  return (
    <Button 
    onPress={this.testBluetoothEnabled}
    title="Teste si le bluetooth est allumé"
    color="#f00"
    />
  );
}
}




//-------------------------------------------------------------------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});



export default BluetoothOn;
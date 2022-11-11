import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import RNBluetoothClassic, {
  BluetoothDevice
} from 'react-native-bluetooth-classic';



//-------------------------------------------------------------------------------------------------------------------------------------
//Importations faites
import { Button } from 'react-native';

//-------------------------------------------------------------------------------------------------------------------------------------


class BluetoothOn extends React.Component {

  async testBluetoothEnabled(){
      try {
          await enabled = RNBluetoothClassic.isBluetoothEnabled();
          this.setState({enabled});
      } catch (err) {
          // Handle accordingly
      }
  }


render() {
  return (
    <Button 
    onPress={this.testBluetoothEnabled()}
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
  img: {
    width: '80%',
    height: '65%',
    marginBottom: '5%'
  }
});



export default BluetoothOn;
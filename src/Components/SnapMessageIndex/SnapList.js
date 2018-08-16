import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

export default class SnapList extends Component {
  _keyExtractor = (item, index) => String(item.id);
  _renderItem = ({item}) => (
   <SnapCell
     id={item.id}
     name={item.name}
   />
 );
  render() {
    return(
      <FlatList
        data={DATA}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        style={styles.flatListStyles}
        />
    )
  }
}

class SnapCell extends React.PureComponent {
  render(){
    return(
      <View style={styles.snapCellStyles}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.snapCellSendSnapStyle}/>
        </View>
        <View style={{flex: 4, justifyContent: 'center', alignItems: 'flex-start'}}>
          <Text style={styles.snapCellTextStyle}>{this.props.name}</Text>
        </View>
      </View>
    )
  }
}

const DATA = [
  {
    name: 'Johnny',
    message: 'oasteuhaonth',
    date: 32993483823,
    id: 0,
  },
  {
    name: 'Sammy',
    message: 'oasteuhaonth',
    date: 5234645363456,
    id: 1,
  },
  {
    name: 'Olaf',
    message: 'oasteuhaonth',
    date: 12352845834,
    id: 2,
  },
  {
    name: 'Cecilia',
    message: 'oasteuhaonth',
    date: 538763945439640,
    id: 3,
  }
]
const styles = StyleSheet.create({
  snapCellStyles: {
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  snapCellTextStyle: {
    fontSize: 30,
  },
  snapCellSendSnapStyle: {
    borderRadius: 12,
    height: 40,
    width: 40,
    backgroundColor: '#e49',
    flex: 1
  },
  flatListStyles: {
    width: '100%',
  }
})

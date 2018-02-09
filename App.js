/**
 * Created by sahilpandya on 01/02/18.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import CardList from './src/CardList';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <CardList/>
            </View>
        )
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
/**
 * Created by sahilpandya on 29/01/18.
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    render() {
        const {name} = this.props;
        let url = require(`./static/images/image.jpg`);
        return (
            <TouchableOpacity style={styles.cardBodyFormat}>
                <View style={[styles.iconHolder]}>
                    <Image source={url} style={styles.image}/>
                </View>
                <View style={styles.cardDetail}>
                    <View style={styles.leftSection}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.description}>This is test message...</Text>
                        <TextInput
                            type="text"
                            style={styles.textInput}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            placeholder="message here"
                        />
                    </View>
                    <View style={styles.rightSection}>
                        <Text style={styles.created}>Yesterday</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    cardBodyFormat: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginTop: 10,
        marginBottom:0,
    },
    cardDetail: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    iconHolder: {
        marginHorizontal: 10,

    },
    name: {
        fontSize:16,
        fontWeight: 'bold'
    },
    description: {
      fontSize:12
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: '#ccc',
        borderWidth: 1,
        resizeMode: Image.resizeMode.cover
    },
    leftSection: {
        flexDirection: 'column',
    },
    rightSection:{
        paddingHorizontal:10
    },
    created: {
        textAlign:'center',
        fontSize:10
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5,
        borderRadius: 3,
        padding: 10,
        width:200
    }
});


export default Card;

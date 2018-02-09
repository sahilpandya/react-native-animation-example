/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Animated,
    StatusBar
} from 'react-native';

import Main from './Main';
import Card from './Card';
const HEADER_MAX_HEIGHT = 300;

export default class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0),
        };
    }

    _renderScrollViewContent() {
        return (
            <View style={styles.scrollViewContent}>
                <Card name="Test 1" imageName="image"/>
                <Card name="Test 2" imageName="image"/>
                <Card name="Test 3" imageName="image"/>
                <Card name="Test 4" imageName="image"/>
                <Card name="Test 5" imageName="image"/>
                <Card name="Test 6" imageName="image"/>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.fill}>
                <StatusBar
                    translucent
                    barStyle="light-content"
                    backgroundColor="rgba(0, 0, 0, 0.251)"
                />
                <Animated.ScrollView
                    style={styles.fill}
                    scrollEventThrottle={1}
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}],
                        {useNativeDriver: true},
                    )}
                >
                    {this._renderScrollViewContent()}
                </Animated.ScrollView>
                <Main scrollY={this.state.scrollY}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fill: {
        flex: 1,
    },
    scrollViewContent: {
        marginTop: HEADER_MAX_HEIGHT,
    }
});

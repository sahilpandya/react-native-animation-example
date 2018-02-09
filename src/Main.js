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
    Dimensions,
    Animated
} from 'react-native';
const today = '29-01-2018';
const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const headerTranslate = this.props.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -HEADER_SCROLL_DISTANCE],
            extrapolate: 'clamp',
        });

        const imageOpacity = this.props.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 3, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 0.3, 0.1, 0],
            extrapolate: 'clamp',
        });
        const imageTranslate = this.props.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0,60],
            extrapolate: 'clamp',
        });

        const titleScale = this.props.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0.8],
            extrapolate: 'clamp',
        });
        const titleTranslate = this.props.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 0, 0],
            extrapolate: 'clamp',
        });

        return (
            <Animated.View
                style={[
                    styles.header,
                    { transform: [{ translateY: headerTranslate }] },
                ]}
            >
                <Animated.Image
                    style={[
                        styles.backgroundImage,
                        {
                            opacity: imageOpacity,
                            transform: [{ translateY: imageTranslate }],
                        },
                    ]}
                    source={require('./static/images/image.jpg')}
                />
                <Animated.View
                    style={[styles.status,
                        {
                            transform: [
                                { scale: titleScale },
                                { translateY: titleTranslate },
                            ],
                        },
                    ]}
                >
                    <View>
                        <Text style={styles.statusName}>Rifco Group
                            <Text style={styles.statusText}> :) Be happy !!!</Text>
                        </Text>
                        <Text style={styles.statusText}>Created by Sahil Pandya, {today}</Text>
                    </View>
                </Animated.View>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //   flex: 1
    },
    status: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: 10,
        right: 0,
    },
    statusText: {
        color: '#fff',
        fontSize: 12
    },
    statusName: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#009688',
        overflow: 'hidden',
        height: HEADER_MAX_HEIGHT,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
    },
});


export default Main;
import React,  { Component } from 'react';
import {
    Button,
    StyleSheet,
    View
} from 'react-native';
import { connect } from 'react-redux';
import { saveUserToken } from '../actions';
import AsyncStorage from '@react-native-community/async-storage';

class SignInScreen extends Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign in!" onPress={this._signInAsync} />
            </View>
        );
    }

    _signInAsync = () => {
        this.props.saveUserToken()
            .then(() => {
                this.props.navigation.navigate('App');
            })
            .catch((error) => {
                this.setState({ error })
            })
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = state => ({
    token: state.token,
});


const mapDispatchToProps = dispatch => ({
    saveUserToken: () => dispatch(saveUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);

import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container, Content, List, ListItem, InputGroup, Input, Icon, Button } from 'native-base';
import Navbar from '../components/Navbar';

import styles from '../styles/PageStyle';

// Compact way to render Presentational Components (dumb)
// Dumb Components just get props and they know nothing about state
const Login = (props) => {

    const right = {
        icon: "ios-close",
        onPress: Actions.pop
    };

    return (
        <Container>
            <Navbar role="header" title="Login" right={right} />

            <View style={styles.content}>

                <View style={styles.subContainer}>
                    <Text style={styles.heading}>Login now!</Text>
                </View>

                <View style={[styles.subContainer, {justifyContent: 'flex-start'}]}>

                    <List style={styles.listLogin}>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-person" />
                                <Input placeholder="EMAIL" />
                            </InputGroup>
                        </ListItem>

                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-unlock" />
                                <Input placeholder="PASSWORD" secureTextEntry={true}/>
                            </InputGroup>
                        </ListItem>

                        <Button
                            block
                            style={{marginTop: 21}}
                            onPress={ () => alert('submit') }
                        >
                            Submit
                        </Button>
                    </List>

                </View>

                <View style={[styles.subContainer, {justifyContent: 'flex-end'}]}>
                    <Button
                        block
                        warning
                        transparent
                        style={{marginTop: 21}}
                        textStyle={{color: '#007AFF'}}
                        onPress={ Actions.register }
                    >
                        Not a member? Create an account
                    </Button>
                </View>

            </View>

        </Container>
    );
};

export default Login;
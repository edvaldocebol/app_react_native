import React, { useState, useContext } from "react";
import { useNavigation } from '@react-navigation/native'; // Corrigido: useNavigationContainer para useNavigation
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UseContext } from "../../contexts/UserContext";
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessagemButton,
    SignMessagemButtonText,
    SignMessagemButtonTextBold
} from './style';

import Api from "../../Api";

import BarberLgo from '../../assets/barber.svg';
import Signinput from "../../components/Signinput";
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import { Alert } from "react-native";

export default () => {
    const { dispatch: userDispatch } = useContext(UseContext);
    const navigation = useNavigation(); // Corrigido: usenavigationContainer para useNavigation

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'SignUp' }]
        });
    }

    const handleSignClick = async () => {
        if (emailField != '' && passwordField != '') {

            let json = await Api.signIn(emailField, passwordField);
            console.log(json)
            if (json.token) {
                await AsyncStorage.setItem('token', json.token);

                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar:json.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name:'MainTap'}]
                });

            } else {
                Alert.alert("E-mail e/ou senhas incorretos(a)");
            }

        } else {
            Alert.alert("Preencha os campos!");
        }
    }

    return (
        <Container>
            <BarberLgo width="100%" height="160" />

            <InputArea>
                <Signinput
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                />
                <Signinput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t => setPasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessagemButton onPress={handleMessageButtonClick}>
                <SignMessagemButtonText>Ainda não possui uma conta?</SignMessagemButtonText>
                <SignMessagemButtonTextBold>Cadastre-se</SignMessagemButtonTextBold>
            </SignMessagemButton>
        </Container>
    );
}

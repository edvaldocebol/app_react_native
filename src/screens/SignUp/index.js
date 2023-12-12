import React, { useContext, useState } from "react";
import { useNavigation } from '@react-navigation/native';
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
import NomeIcon from '../../assets/person.svg';
import { Alert } from "react-native";

export default () => {
    const { dispatch: userDispatch } = useContext(UseContext);
    const navigation = useNavigation(); // Corrigido: usenavigationContainer para useNavigation

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [nomeField, setnomeField] = useState('');

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'SignIn' }]
        });
    }

    const handleSignClick = async () => {
        if (nomeField != '' && emailField != '' && passwordField != '') {
            let json = await Api.signUp(nomeField, emailField, passwordField);
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
                Alert.alert("Erro:" + json.error);
            }
        } else {
            Alert.alert("Preench os Cmpos!");
        }
    }

    return (
        <Container>
            <BarberLgo width="100%" height="160" />

            <InputArea>
                <Signinput
                    IconSvg={NomeIcon}
                    placeholder="Digite seu nome"
                    value={nomeField}
                    onChangeText={t => setnomeField(t)}
                />

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
                    <CustomButtonText>CADASTRE-SE</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessagemButton onPress={handleMessageButtonClick}>
                <SignMessagemButtonText>já possui uma conta?</SignMessagemButtonText>
                <SignMessagemButtonTextBold>LOGIN</SignMessagemButtonTextBold>
            </SignMessagemButton>
        </Container>
    );
}

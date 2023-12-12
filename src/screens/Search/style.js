import React from "react";
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #63C2D1;
`;

export const HederAreaPesquisa = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Pesquisa = styled.View`
    background-color: #4EADBE;
    height: 50px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 40px;
    margin-left:25px;
    margin-right:25px;
    
`;


export const PesquisaButton = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`;

export const PequisaInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: white;
`;
export const CardItemsPesquisa = styled.TouchableOpacity`
    background-color:white;
    heigth:100px;
    border-radius:15px;
    padding:10px;
    padding-left:20px;
    padding-right:20px;
    margin-top:5px;
`;

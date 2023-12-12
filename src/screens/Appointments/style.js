import React from "react";
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #63C2D1;
`;

export const ButtonMas = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    borderRadius: 25px;
    backgroundColor: #19e5e6;
    justifyContent: center;
    alignItems: center;
`;
export const CardItemsHora = styled.View`
    background-color:white;
    border-radius:15px;
    padding-left:20px;
    margin-top:5px;
    flexDirection:row;
    alignItems:center;
    margin-left:5px;
`;
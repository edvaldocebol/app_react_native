import React from "react";
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex:1;
    background-color:#63C2D1;
`;
export const Scroller = styled.ScrollView`
    flex:1;
    padding: 20px;
`;
export const HederArea = styled.View`
    flex-direction: row;
    justify-content: space-between;;
    align-items:center;
`;
export const HederTitle = styled.Text`
    width:250px;
    font-size:24px;
    font-weight: bold;
    color:#FFF;
`;
export const SearchButton = styled.TouchableOpacity`
    width:26px;
    heigth:26px;
`;
export const LocationArea = styled.View`
    background-color:#4EADBE;
    heigth:60px;
    border-radius:30px;
    flex-direction:row;
    align-items:center;
    padding-left:20px;
    padding-right:20px;
    margin-top:30px;
`;
export const LocationInput = styled.TextInput`
    flex:1;
    font-size:16px;
    color:white;
`;
export const LocationFinder = styled.TouchableOpacity`
    width:24px;
    heigth:24px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top:50px;
`;

export const CardItems = styled.View`
    background-color:white;
    heigth:100px;
    border-radius:15px;
    padding:10px;
    padding-left:20px;
    padding-right:20px;
    margin-top:30px;
`;
export const NomeItems = styled.Text`
    flex:1;
    font-size:18px;
    color:black;
`;
export const DescricaoItems = styled.Text`
    flex:1;
    font-size:18px;
    color:black;
  
`;
export const AvaliacaoItems = styled.Text`
    flex:1;
    font-size:18px;
    color:black;
`;
export const Preco = styled.Text`
    flex:1;
    font-size:18px;
    color:black;
    
`;
export const Avaliacao = styled.Text`
    flex:1;
    flex-direction:row;
    border:3px solid #4EADBE;
    border-radius:5px;
    flex-direction:row;
    align-items:center;
    margin-top:5px;
    padding:10px;
    
    
`;
export const VerMasItems = styled.TouchableOpacity`
    border: 3px solid #4EADBE;
    border-radius: 8px;
    padding: 16px;
    margin: 15px;
    align-items: center;   
    justify-content: center;
    
`;



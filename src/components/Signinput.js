import React from "react";
import styled from "styled-components";

const InputArea = styled.View`
    width:100%;
    height:60px;
    background-color: #83D6E3;
    flex-direction:row;
    border-radius:30px;
    padding-left:15px;
    align-items:center;
    margin-bottom:15px;
    /* Adicionando estilos personalizados se fornecidos via prop */
    ${({ customStyle }) => customStyle}
`;

const Input = styled.TextInput`
    flex:1;
    font-size:16px;
    color:#268596;
    margin-left:10px;
`;

export default ({ IconSvg, placeholder, value, onChangeText, password, customStyle }) => {
    return (
        <InputArea customStyle={customStyle}>
            <IconSvg width="24" height="24" fill="#268596" />
            <Input
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    );
};

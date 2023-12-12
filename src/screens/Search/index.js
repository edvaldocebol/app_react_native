import React, { useState, useEffect } from "react";
import { Container, Pesquisa, PesquisaButton, PequisaInput, CardItemsPesquisa } from './style';
import PesquisaIcon from '../../assets/search.svg';
import getServico from "../../functions/getServico";
import { Alert, Text, View } from "react-native";
import { Scroller } from "../Home/style";

export default () => {
    const [pesquisaText, setPesquisaText] = useState('');
    const [resultadosPesquisa, setResultadosPesquisa] = useState([]);


    const pesquisaClick = (item) => {
        Alert.alert(
            `Detalhes de ${item.nome}`,
            `Descrição: ${item.descricao}\nPreço: R$${item.preco.toFixed(2)}`
        );
    };

    useEffect(() => {
        const pesquisarServicos = async () => {
            const servicos = getServico();

            const resultados = servicos.filter(servico =>
                servico.nome.toLowerCase().includes(pesquisaText.toLowerCase())
            );

            setResultadosPesquisa(resultados);
        };

        pesquisarServicos();
    }, [pesquisaText]);

    return (
        <Container>
            <Pesquisa>
                <PequisaInput
                    placeholder="O que deseja ?"
                    placeholderTextColor="white"
                    onChangeText={(e) => setPesquisaText(e)}
                />
                <PesquisaButton>
                    <PesquisaIcon width="24" height="24" fill="white" />
                </PesquisaButton>
            </Pesquisa>
            <Scroller>
                {pesquisaText.trim() !== '' && resultadosPesquisa.length > 0 ? (
                    resultadosPesquisa.map(servico => (
                        <CardItemsPesquisa onPress={() => pesquisaClick(servico)} key={servico.id}>
                            <View>
                                <Text>{servico.nome}</Text>
                            </View>
                        </CardItemsPesquisa>
                    ))
                ) : (
                    <View>
                        <Text>Nenhum resultado encontrado.</Text>
                    </View>
                )}

            </Scroller>
        </Container>
    );
}

// SeuComponentePrincipal.js
import React, { useState, useEffect } from 'react';
import { Alert, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StarIcon from '../../assets/star.svg'; // Importe a imagem da estrela
import { Text } from 'react-native';
import Api from '../../Api';
import getServico from '../../functions/getServico';

import {
    Container,
    Scroller,
    HederArea,
    HederTitle,
    SearchButton,
    LocationArea,
    LocationInput,
    LocationFinder,
    LoadingIcon,
    CardItems,
    NomeItems,
    DescricaoItems,
    Preco,
    Avaliacao,
    AvaliacaoItems,
    VerMasItems
} from './style';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

export default () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [locationText, setLocationText] = useState('');

    const handleLocationFinder = () => { 
      const servicos = getServico();
        setList(servicos);
    };

    const handleVerMaisClick = (item) => {
        Alert.alert(
            `Detalhes de ${item.nome}`,
            `Descrição: ${item.descricao}\nPreço: R$${item.preco.toFixed(2)}`,
        );
    };

    useEffect(() => {
        handleLocationFinder();
    }, []);

    return (
        <Container>
            <Scroller>
                <HederArea>
                    <HederTitle numberOflines={2}>Encontre o tratamento perfeito</HederTitle>
                    <SearchButton onPress={() => navigation.navigate('Search')}>
                        <SearchIcon width="26" heigth="26" fill="white" />
                    </SearchButton>
                </HederArea>

                <LocationArea>
                    <LocationInput
                        placeholder="Onde você está?"
                        placeholderTextColor="white"
                        onChangeText={(t) => setLocationText(t)}
                    />
                    <LocationFinder onPress={handleLocationFinder}>
                        <MyLocationIcon width="24" heigth="24" />
                    </LocationFinder>
                </LocationArea>

                {loading && <LoadingIcon size="large" color="white" />}

                <FlatList
                    data={list}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <CardItems>
                            <NomeItems>{item.nome}</NomeItems>
                            <DescricaoItems>{item.descricao}</DescricaoItems>
                            <Preco> Preço: R${item.preco.toFixed(2)}</Preco>
                            <Avaliacao>
                                <AvaliacaoItems> Avaliações:   </AvaliacaoItems>
                                {Array.from({ length: item.avaliacao }).map((_, index) => (
                                    <StarIcon key={index} width="18" height="18" fill="gold" />
                                ))}
                            </Avaliacao>
                            <VerMasItems onPress={() => handleVerMaisClick(item)}>
                                <Text>SAIBA MAS</Text>
                            </VerMasItems>
                        </CardItems>
                    )}
                />

            </Scroller>
        </Container>
    );
};

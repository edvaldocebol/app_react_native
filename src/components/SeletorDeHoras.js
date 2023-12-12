import React, { useState, useEffect } from 'react';
import { View, Text, Platform, DatePickerIOS, TimePickerAndroid, StyleSheet } from 'react-native';

const SeletorDeHoras = () => {
    const [horaSelecionada, setHoraSelecionada] = useState(new Date());

    const handleHoraChange = (novaHora) => {
        setHoraSelecionada(novaHora);
    };

    const exibirSeletorDeHorasAndroid = async () => {
        try {
            const { action, hour, minute } = await TimePickerAndroid.open({
                hour: horaSelecionada.getHours(),
                minute: horaSelecionada.getMinutes(),
                is24Hour: true,
            });

            if (action !== TimePickerAndroid.dismissedAction) {
                const novaHora = new Date();
                novaHora.setHours(hour);
                novaHora.setMinutes(minute);
                handleHoraChange(novaHora);
            }
        } catch ({ code, message }) {
            console.warn('Erro ao exibir o seletor de horas', message);
        }
    };

    const exibirSeletorDeHorasiOS = () => {
        return (
            <DatePickerIOS
                date={horaSelecionada}
                onDateChange={handleHoraChange}
                mode="time"
            />
        );
    };

    const exibirSeletorDeHoras = Platform.OS === 'ios' ? exibirSeletorDeHorasiOS : exibirSeletorDeHorasAndroid;

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Seletor de Horas</Text>
            {exibirSeletorDeHoras()}
            <Text style={styles.horaSelecionada}>
                Hora Selecionada: {horaSelecionada.toLocaleTimeString()}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    horaSelecionada: {
        marginTop: 20,
        fontSize: 18,
    },
});

export default SeletorDeHoras;

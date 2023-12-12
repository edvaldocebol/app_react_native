import React, { useState } from 'react';
import { Container, ButtonMas, CardItemsHora } from './style';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { Picker } from '@react-native-picker/picker';
import { Scroller } from '../Home/style';


LocaleConfig.defaultLocale = 'pt-br';

LocaleConfig.locales['pt-br'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
    dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
    today: 'Hoje'
};

export default () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedHour, setSelectedHour] = useState('0');
    const [selectedMinute, setSelectedMinute] = useState('0');

    const renderHours = () => {
        const hours = [];
        for (let i = 0; i < 24; i++) {
            hours.push(<Picker.Item key={i} label={i.toString()} value={i.toString()} />);
        }
        return hours;
    };

    const renderMinutes = () => {
        const minutes = [];
        for (let i = 0; i < 60; i++) {
            minutes.push(<Picker.Item key={i} label={i.toString()} value={i.toString()} />);
        }
        return minutes;
    };

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
        // Aqui você pode fazer algo com a data selecionada
    };

    return (
        <Container>
            <Scroller>
                <View style={styles.calendario}>
                    <Calendar
                        current={'2023-01-01'}
                        minDate={'2023-01-01'}
                        maxDate={'2023-12-31'}
                        onDayPress={onDayPress}
                        monthFormat={'MMMM yyyy'}
                        markedDates={{ [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' } }}
                        hideArrows={false}
                        hideExtraDays={true}
                        disableMonthChange={false}
                        firstDay={1}
                        hideDayNames={false}
                        showWeekNumbers={false}
                        onPressArrowLeft={subtractMonth => subtractMonth()}
                        onPressArrowRight={addMonth => addMonth()}
                    />
                </View>
                <View style={styles.Texto}>
                    <Text style={styles.TexoHo}>Escolha um horario ?</Text>
                </View>
                <View style={styles.container}>
                    <CardItemsHora>
                        <Text>Hora:</Text>
                        <Picker
                            style={styles.picker}
                            selectedValue={selectedHour}
                            onValueChange={(itemValue) => setSelectedHour(itemValue)} >
                            {renderHours()}
                        </Picker>
                    </CardItemsHora>
                    <CardItemsHora>
                        <Text>Minuto:</Text>
                        <Picker
                            style={styles.picker}
                            selectedValue={selectedMinute}
                            onValueChange={(itemValue) => setSelectedMinute(itemValue)}
                        >
                            {renderMinutes()}
                        </Picker>
                    </CardItemsHora>
                </View>
                <CardItemsHora style={{ width: 250, height: 60 }}>
                    <Text>
                        Horario selecionado:  {selectedHour}:{selectedMinute}
                    </Text>
                </CardItemsHora>
                <CardItemsHora style={{ width: 250, height: 60 }}>
                    {<Text>Data selecionada: {selectedDate}</Text>}
                </CardItemsHora>
                {/* <View style={styles.container2}>
                    <ButtonMas>
                        <Text style={styles.textoBotao}>+</Text>
                    </ButtonMas>
                </View> */}
            </Scroller>
        </Container>
    );
}

const styles = StyleSheet.create({
    textoBotao: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 20,
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
    },
    Texto: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: 8,
    },
    calendario: {
        borderRadius: 25,
    },
    picker: {
        width: 100,
    },
    TexoHo: {
        fontSize: 20,
        color: 'black',
    },
});

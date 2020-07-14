import React from 'react';
import {Text
        , View
        , Image
        , TouchableOpacity 
        , FlatList
    } from 'react-native';

import {useNavigation} from '@react-navigation/native';    
import api from '../../services/api';

// import logoImg from '../../assets/favicon.png';
//import logoImg from '../../assets/bestHome.png';
import logoImg from '../../assets/heroes.png';
import styles from './styles';


export default function Incidents() {

    const navigation = useNavigation();

    function navigateToDeatil() {
        navigation.navigate('Details');

    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={logoImg} 
                    style={styles.imageIncident}
                    resizeMode="contain"
                />

                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>.
                </Text>

            </View>

            <Text style={styles.title}>
                Bem-Vindo! hello world
            </Text>

            <Text style={styles.description}>
                Escolha um dos casos abaixo e salve o dia
            </Text>

            <FlatList 
                data={[1,2,3, 4]}
                style={styles.incidentList}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator = {false}
                renderItem={() => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>APAD</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>R$ 120,00</Text>

                        <TouchableOpacity 
                            style={styles.buttonNew} 
                            onPress={navigateToDeatil}>
                            <Text style={styles.detailsButtonText}>Detalhes</Text>
                        </TouchableOpacity>
                    </View>
                    
                )}
            />

        </View>
    );

}
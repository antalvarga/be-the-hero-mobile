import React, {useState, useEffect} from 'react';
import {Text
        , View
        , Image
        , TouchableOpacity 
        , FlatList
    } from 'react-native';

import {useNavigation} from '@react-navigation/native';    

// import logoImg from '../../assets/favicon.png';
//import logoImg from '../../assets/bestHome.png';
import logoImg from '../../assets/heroes.png';
import styles from './styles';

import api from '../../services/api';

export default function Incidents() {
    const [incidents, setIncidents] = useState([])
    const [total, setTotal] = useState(0);

    // Aula4 - 1:21:21 Paginação infinita
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
     
    const navigation = useNavigation();

    async function loadIncidents() {
        // caso esteja fazendo loading
        if( loading ) {
            return;
        }

        // Caso tenha carregado todos os registros
        if( total > 0 && total === incidents.length ){
            return;
        }

        setLoading(true);
        const response = await api.get('incidents', {params: {page}});

        // Para evitar sobrescrever
        //setIncidents(response.data);
        // Anexando dois vetores
        setIncidents( [...incidents, ...response.data] );
        setTotal(response.headers['x-total-count']);
        setPage( page + 1);
        setLoading(false);
    }

    useEffect( () => {
        loadIncidents();
    }, []  );

    function navigateToDeatil( incident ) {
        navigation.navigate('Details', {incident} );

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
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>

            </View>

            <Text style={styles.title}>
                Bem-Vindo! hello world
            </Text>

            <Text style={styles.description}>
                Escolha um dos casos abaixo e salve o dia
            </Text>

            <FlatList 
                data={incidents}
                style={styles.incidentList}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator = {false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.1}
                renderItem={({item: incident}) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value) }</Text>

                        <TouchableOpacity 
                            style={styles.buttonNew} 
                            onPress={() => navigateToDeatil(incident)}>
                            <Text style={styles.detailsButtonText}>Detalhes</Text>
                        </TouchableOpacity>
                    </View>
                    
                )}
            />

        </View>
    );

}
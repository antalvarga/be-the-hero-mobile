import React from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import bestHome from '../../assets/bestHome.png';

export default function Home( { navigation }){
    return(
        <View style={styles.container}>
            <Image 
                source={ bestHome }
                style={styles.imageHome}
                resizeMode="contain"
            />
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}
                    onPress={ () => {
                        navigation.navigate("Incidents")
                    } } 
                >
                    <Text style={styles.textButton}>
                        Vá para os Incidentes
                    </Text>

                </TouchableOpacity>

            </View>

        </View>
    );
}

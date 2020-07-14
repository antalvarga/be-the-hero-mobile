import React from 'react';
import {Text, View, Image, TouchableOpacity, Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import logoImg from '../../assets/heroes.png';

//import * as MailComposer from 'expo-mail-composer';

export default function Detail() {

    const navigation = useNavigation();
    const message = 'Olá APAD... Gostaria de ajuda com o valor R$ 120'
    // Verificar o onPress
    function navigationBack() {
        navigation.goBack();
    }

    function sendMail() {   
        // MailComposer.composeAsync({
        //     subject: 'Heroi do caso: Cadelinha atropelada'
        //     , recipients: ['asvarga@gmail.com']
        //     , body: message
        //     , 
        // })
    }

    function sendWhatsApp() {
        Linking.openURL( `whatsapp://send?phone=(21)988347822 text=${message}`)
    }


    return(
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Image 
                    source={logoImg} 
                    style={styles.imageDetail}
                    resizeMode="contain"
                />

                <TouchableOpacity
                    style={styles.action}
                    onPress = {() => { navigation.goBack() }}
                >
                    <Text style={styles.actionText}> Voltar </Text>

                </TouchableOpacity>

            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>

            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o heroi deste caso</Text>

                <Text style={styles.heroDescription}>Entre em contato!</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPres={sendWhatsApp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPres={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    );
}

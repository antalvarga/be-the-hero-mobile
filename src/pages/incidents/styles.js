import {StyleSheet} from 'react-native';
// para a barra de status
// import Constants from 'expo-constants';
//         , paddingTop: Constants.statusBarHeigh + 20

export default StyleSheet.create({
    container: {
        flex: 1
        , paddingHorizontal: 24
        , paddingTop: 80
        ,
    }
    , imageIncident: {
        width: 200
        , height: 240
        , flex: 1
    }
    , header: {
        flexDirection: 'row'
        , justifyContent: 'space-between'
        , alignItems: 'center'
        , 
    }
    , headerText: {
        fontSize: 16
        , color: '#737380'
        , 
    }
    , headerTextBold: {
        fontWeight: 'bold'
    }
    , title: {
        fontSize: 30
        , marginBottom: 16
        , marginTop: 48
        , color: '#13131a'
        , fontWeight: 'bold'
    }
    , description: {
        fontSize: 16
        , lineHeight: 24
        , color: '#737380'
    }
    , incidentList: {
        marginTop: 32
    }
    , incident: {
        padding: 24
        , borderRadius: 8
        , backgroundColor: '#fff'
        , marginBottom: 16
        ,
    }
    , incidentProperty: {
        fontSize: 14
        , color: '#41414d'
        , fontWeight: 'bold'
    }
    , incidentValue: {
        marginTop: 8
        , fontSize: 15
        , marginBottom: 24
        , color: '#737380'
    }
    , detailsButton: {
        flexDirection: 'row'
        , justifyContent: 'space-between'
        , alignItems: 'center'
        , color: '#e02041'
        , borderColor: '#da552f'
    }
    , buttonNew: {
        height: 42
        , borderRadius: 5
        , borderWidth: 2
        , borderColor: '#e02041'
        , backgroundColor: 'transparent'
        , justifyContent: 'center'
        , alignItems: 'center'
        , marginTop: 10
    }  
    , detailsButtonText: {
        color: '#e02041'
        , fontSize: 15
        , fontWeight: 'bold'
    }


});
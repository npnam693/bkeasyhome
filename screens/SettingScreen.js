import { Text, View, Image, StyleSheet } from "react-native"
import { ScreenWidth } from "@rneui/base"
import SettingSquare from "../components/setting/SettingSquare"
import SettingRectangle from "../components/setting/SettingRectangle"
export default function SettingScreen() {
    return (
        <View style = {styles.container}>
                <Image source={{uri:'https://avatoon.net/wp-content/uploads/2022/07/Cartoon-Avatar-White-Background-300x300.png'}} 
                    style = {{width: 130, height: 130, borderRadius: 110, borderWidth: 1, borderColor:'#60F1D4'}}
                />
                <Text style = {{fontSize: 20, fontWeight: '600', color: '#10101'}}>Nguyen Phi Nam</Text>
                <Text style = {{fontSize: 14, fontWeight: '400', color: '#fffff'}}>nguyenphinam2k2@example.com</Text>
                <View style = {styles.option}>
                    <SettingSquare type = "SHARE_KEY" />
                    <SettingSquare type = "FACE_RECOGNITION" />
                    <SettingSquare type = "CHANGE_PIN" />
                    <SettingSquare type = "ADD_DEVICE" />
                </View >
                <View style={[styles.options,{flexDirection: 'column', marginTop: 20}]}>
                    <SettingRectangle type = "PROFILE" />
                    <SettingRectangle type = "NOTIFICATION" />
                    <SettingRectangle type = "SUPPORT" />
                    <SettingRectangle type = "LOGOUT" />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    option: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: ScreenWidth - 50,
        marginTop: 30,
    }
})
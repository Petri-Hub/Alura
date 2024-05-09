import { Text, Image, View, StyleSheet, Dimensions } from "react-native"
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat'
import bannerImage from '../../assets/topo.png'
import sellerImage from '../../assets/logo.png'

const width = Dimensions.get('screen').width

export default function Basket() {
   return (
      <>
         <Image style={styles.banner} source={bannerImage} />
         <Text style={styles.tooltip}>Detalhes da Cesta</Text>
         <View style={styles.info}>
            <Text style={styles.title}>Cestas de verduras</Text>
            <View style={styles.seller}>
               <Image style={styles.logo} source={sellerImage} />
               <Text style={styles.name}>Vendedor Qualquer</Text>
            </View>
            <Text style={styles.description}>Uma cesta com produtos selecionados da fazenda direto pra cozinha</Text>
            <Text style={styles.price}>R$ 20,00</Text>
         </View>
      </>
   )
}


const styles = StyleSheet.create({
   banner: {
      width: "100%",
      height: 578 / 768 * width
   },
   tooltip: {
      width: "100%",
      top: 20,
      fontSize: 16,
      color: "#fff",
      position: "absolute",
      textAlign: 'center'
   },
   info: {
      padding: 20
   },
   title: {
      fontSize: 25,
      color: 'black',
      fontWeight: 'bold',
      marginBottom: 7
   },
   seller: {
      flexDirection: "row",
      alignItems: 'center',
      marginBottom: 7
   },
   name: {
      fontSize: 16
   },
   logo: {
      width: 30,
      height: 30,
      borderRadius: 6,
      marginRight: 7
   },
   description: {
      color: '#a3a3a3',
      fontSize: 18,
      marginBottom: 7
   },
   price: {
      color: "#2a9f85",
      fontWeight: 'bold',
      fontSize: 26,
   }
})
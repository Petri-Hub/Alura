import { SafeAreaView, StatusBar, View } from 'react-native';
import Basket from './src/screens/Basket.js';

export default function App() {
   return (
      <SafeAreaView>
         <StatusBar />
         <Basket />
      </SafeAreaView>
   );
}

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './src/themes/deafult';

import { ActivityIndicator } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold})

  return (
    <ThemeProvider theme={defaultTheme}>
      {fontsLoaded ? <Routes /> : <ActivityIndicator color='red' />}    
    </ThemeProvider>
  );
}

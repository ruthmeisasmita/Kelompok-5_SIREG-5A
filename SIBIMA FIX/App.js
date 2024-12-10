import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Beranda from './src/screen/Beranda';
import Status_USEPT from './src/screen/Status_USEPT';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Milestone from './src/screen/Milestone';
import Progres_IPK_SKS from './src/screen/Progres_IPK_SKS';
import Janji_bimbingan from './src/screen/Janji_bimbingan';
import Intruksi_bimbingan from './src/screen/Intruksi_bimbingan';
import Jadwal_dosen from './src/screen/Jadwal_dosen';
import Informasi from './src/screen/Informasi';
import Kalender_bimbingan from './src/screen/Kalender_bimbingan';
import Logbook_bimbingan from './src/screen/Logbook_bimbingan';
import Buat_Janji_Putri from './src/screen/Buat_Janji_Putri';
import Buat_Janji_Alsela from './src/screen/Buat_Janji_Alsela';
import Buat_Janji_Endang from './src/screen/Buat_Janji_Endang';
import Buat_Janji_Pacu from './src/screen/Buat_Janji_Pacu';
import Buat_Janji2 from './src/screen/Buat_Janji2';
import Buat_Janji3 from './src/screen/Buat_Janji3';
import KHS from './src/screen/KHS';
import KRS from './src/screen/KRS';
import Unggah_KHS from './src/screen/Unggah_KHS';
import Unggah_KRS from './src/screen/Unggah_KRS';
import Chat_Dosen1 from './src/screen/Chat_Dosen1';
import Chat_dosen_putri from './src/screen/Chat_dosen_putri';
import Forum from './src/screen/Forum';
import Janji_bimbingan_diterima from './src/screen/Janji_bimbingan_diterima';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Beranda" component={Beranda} options={{headerShown: false}} />
        <Stack.Screen name="Status_USEPT" component={Status_USEPT} options={{headerShown: false}} />
        <Stack.Screen name="Milestone" component={Milestone} options={{headerShown: false}} />
        <Stack.Screen name="Progres_IPK_SKS" component={Progres_IPK_SKS} options={{headerShown: false}} />
        <Stack.Screen name="KHS" component={KHS} options={{headerShown: false}} />
        <Stack.Screen name="KRS" component={KRS} options={{headerShown: false}} />
        <Stack.Screen name="Unggah_KHS" component={Unggah_KHS} options={{headerShown: false}} />
        <Stack.Screen name="Unggah_KRS" component={Unggah_KRS} options={{headerShown: false}} />
        <Stack.Screen name="Janji_bimbingan" component={Janji_bimbingan} options={{headerShown: false}} />
        <Stack.Screen name="Informasi" component={Informasi} options={{headerShown: false}} />
        <Stack.Screen name="Intruksi_bimbingan" component={Intruksi_bimbingan} options={{headerShown: false}} />
        <Stack.Screen name="Jadwal_dosen" component={Jadwal_dosen} options={{headerShown: false}} />
        <Stack.Screen name="Kalender_bimbingan" component={Kalender_bimbingan} options={{headerShown: false}} />
        <Stack.Screen name="Logbook_bimbingan" component={Logbook_bimbingan} options={{headerShown: false}} />
        <Stack.Screen name="Buat_Janji_Putri" component={Buat_Janji_Putri} options={{headerShown: false}} />
        <Stack.Screen name="Buat_Janji_Alsela" component={Buat_Janji_Alsela} options={{headerShown: false}} />
        <Stack.Screen name="Buat_Janji_Endang" component={Buat_Janji_Endang} options={{headerShown: false}} />
        <Stack.Screen name="Buat_Janji_Pacu" component={Buat_Janji_Pacu} options={{headerShown: false}} />
        <Stack.Screen name="Buat_Janji2" component={Buat_Janji2} options={{headerShown: false}} />
        <Stack.Screen name="Buat_Janji3" component={Buat_Janji3} options={{headerShown: false}} />
        <Stack.Screen name="Chat_Dosen1" component={Chat_Dosen1} options={{headerShown: false}} />
        <Stack.Screen name="Chat_dosen_putri" component={Chat_dosen_putri} options={{headerShown: false}} />
        <Stack.Screen name="Janji_bimbingan_diterima" component={Janji_bimbingan_diterima} options={{headerShown: false}} />
        <Stack.Screen name="Forum" component={Forum} options={{headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



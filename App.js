import { StatusBar } from 'expo-status-bar';
import React, { createContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home/Home';
import Welcome from './Components/Welcome/Welcome';

export const userContext = createContext()
export const ModifyContext = createContext()

export default function App() {
  const [modify, setModify] = useState(0)
  const [user, setUser] = useState({})
  const [page, setPage] = useState('welcome')
  return (
    <userContext.Provider value={[user, setUser, page, setPage, modify, setModify]}>
      <>
        {
          page === 'welcome' ?
            <Welcome></Welcome>
            : <Home></Home>
        }
      </>
    </userContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const Chat_Dosen1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.arrowContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Buat_Janji2')}>
                <Ionicons name="arrow-back" size={20} color="#FBBF24" />
              </TouchableOpacity>
            </View>
            <Text style={styles.headerTitle}>Janji Bimbingan</Text>
            <View style={styles.headerIcons}>
              <TouchableOpacity>
                <Ionicons name="search" size={24} color="black" style={styles.iconSpacing} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="ellipsis-vertical" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Chat Item - Putri Eka Sevtiyuni */}
          <View style={styles.chatItem}>
            <TouchableOpacity onPress={() => navigation.navigate('Chat_dosen_putri')}>
            <Image
                source={ require('../../Assetsibima/Putri.png')}
              style={styles.avatar}
            />
            </TouchableOpacity>
            <View style={styles.chatContent}>
              <View style={styles.chatHeader}>
              <TouchableOpacity style={styles.chatName}>
                <Text>Putri Eka Sevtiyuni, S.SI., M.T.</Text>
              </TouchableOpacity>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>1</Text>
                </View>
              </View>
              <Text style={styles.chatMessage}>Konfirmasi permohonan bimbingan</Text>
            </View>
          </View>
          
          {/* Chat Item - Forum Bimbingan */}
          <View style={styles.chatItem}>
            <TouchableOpacity onPress={() => navigation.navigate('Forum')}>
            <Image
              source={ require('../../Assetsibima/forum.png')}
              style={styles.avatar}
            />
            </TouchableOpacity>
            <View style={styles.chatContent}>
              <View style={styles.chatHeader}>
              <TouchableOpacity style={styles.chatName}>
                <Text>Forum Bimbingan</Text>
              </TouchableOpacity>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>2</Text>
                </View>
              </View>
              <Text style={styles.chatMessage}>Respon permohonan bimbingan</Text>
            </View>
          </View>
        </View>
      );
}

export default Chat_Dosen1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        padding: 16,
        paddingHorizontal: 2,
        marginTop: 30,
    },
    arrowContainer: {
        width: 25,
        height: 25,
        borderRadius: 20,
        borderColor: "#FBBF24",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
    },  
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    headerIcons: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconSpacing: {
        marginRight: 16,
    },
    chatItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 16,
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderBottomColor: '#E5E7EB', 
      marginTop: 20,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#E5E7EB',
      marginRight: 9,
      marginLeft: 10, 
    },
    chatContent: {
      flex: 1,
      marginLeft: 10,
    },
    chatHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    chatName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#111827', 
    },
    chatMessage: {
      color: '#6B7280', 
      marginTop: 4,
    },
    badge: {
      backgroundColor: '#FBBF24', 
      borderRadius: 12,
      minWidth: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 6,
    },
    badgeText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 12,
    },
  });


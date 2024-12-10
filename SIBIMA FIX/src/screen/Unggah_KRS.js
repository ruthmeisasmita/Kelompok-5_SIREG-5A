import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewBase, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Unggah_KRS = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.arrowContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Progres_IPK_SKS')}>
                    <Ionicons name="arrow-back" size={20} color="#FBBF24" />
                </TouchableOpacity>
            </View>
            <Text style={styles.headerTitle}>Progres IPK & SKS</Text>
            <View style={styles.headerIcons}>
                <TouchableOpacity>
                    <Ionicons name="ellipsis-vertical" size={24} color="black" />
                </TouchableOpacity>
            </View>
          </View>
    
          <View style={styles.card}>
            <Text style={styles.uploadTitle}>Unggah File KRS</Text>
            <Text style={styles.description}>Silahkan unggah file dengan format PDF</Text>
    
            <View style={styles.uploadArea}>
              <Ionicons name="add-circle-outline" size={64} color="#9CA3AF" />
              <Text style={styles.uploadText}>Letakkan File Anda Disini</Text>
              <Text style={styles.browseText}>Telusuri File dari Perangkat Anda</Text>
            </View>
    
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.cancelButton}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueText}>Unggah</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
}

export default Unggah_KRS;

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
        marginBottom: 10,
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
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      padding: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
      marginTop:10,
    },
    uploadTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    description: {
      color: '#6B7280',
      marginBottom: 16,
    },
    uploadArea: {
      borderWidth: 2,
      borderStyle: 'dashed',
      borderColor: '#D1D5DB',
      borderRadius: 10,
      paddingVertical: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16,
    },
    uploadText: {
      color: '#6B7280',
      marginTop: 10,
    },
    browseText: {
      color: '#3470A2',
      marginTop: 5,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cancelButton: {
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: '#D1D5DB',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      flex: 1,
      marginRight: 10,
    },
    cancelText: {
      color: '#374151',
      textAlign: 'center',
    },
    continueButton: {
      backgroundColor: '#3470A2',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      flex: 1,
    },
    continueText: {
      color: '#FFFFFF',
      textAlign: 'center',
    },
  });
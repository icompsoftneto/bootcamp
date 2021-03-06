import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import api from './services/api';

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject(){
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: 'Neto Cajaiba'
        });

        const project = response.data;
        
        setProjects([... projects, project]);
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            <SafeAreaView style={styles.container}>
            <FlatList 
                data={projects}
                keyExtractor={project => project.id}
                renderItem={({ item: project }) => (
                    <Text style={styles.project}>{project.title}</Text>
                )}
            />

            <TouchableOpacity 
            activeOpacity={0.6} 
            style={styles.buttom} 
            onPress={handleAddProject}
            >
                <Text style={styles.buttomText}>Adicionar projeto</Text>
            </TouchableOpacity>
            </SafeAreaView>
         {/*   <View style={styles.container}>
                {projects.map(project => )}
    </View> */}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        
    },
    project: {
        color: '#FFF',
        fontSize: 20,
    },
    buttom:{
        backgroundColor: '#FFF',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttomText:{
        fontWeight: 'bold',
        fontSize: 16,

    }
});
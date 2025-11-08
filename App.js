import { Text, View, Button, Image, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';

function MyApp() {
    // State for each question
    const [type1, setType1] = useState('');
    const [type2, setType2] = useState('');
    const [type3, setType3] = useState('');

    // Correct answers
    const answers = ['Dachshund', 'Golden Retriever', 'Corgi'];

    const handleComplete = () => {
        Alert.alert(
            'Confirm',
            'Do you want to submit your answers?',
            [
                { text: 'Back', style: 'cancel' },
                {
                    text: 'Complete',
                    onPress: () => {
                        const selectedAnswers = [type1, type2, type3];
                        let wrongCount = 0;
                        const wrongQuestions = [];

                        selectedAnswers.forEach((answer, index) => {
                            if (answer !== answers[index]) {
                                wrongCount++;
                                wrongQuestions.push(index + 1);
                            }
                        });

                        if (wrongCount === 0) {
                            Alert.alert('Congratulations!', 'All answers are correct! 🎉');
                        } else {
                            Alert.alert(
                                'Try Again',
                                `You got ${wrongCount} wrong on question(s): ${wrongQuestions.join(', ')}. Please try again.`
                            );
                            // Reset wrong answers
                            if (wrongQuestions.includes(1)) setType1('');
                            if (wrongQuestions.includes(2)) setType2('');
                            if (wrongQuestions.includes(3)) setType3('');
                        }
                    },
                },
            ]
        );
    };

    return (
        <ScrollView style={{ padding: 10 }} >
            {/* Question 1 */}
            <Image source={require('./img/hotdog.jpg')} style={{ width: "100%", height: 400 }} />
            <Text>Q1: What breed is this?</Text>
            <Picker selectedValue={type1} onValueChange={setType1}>
                <Picker.Item label="Select a breed..." value="" enabled={false} color="#999" />
                <Picker.Item label="Golden Retriever" value="Golden Retriever" />
                <Picker.Item label="Corgi" value="Corgi" />
                <Picker.Item label="Dachshund" value="Dachshund" />
            </Picker>

            {/* Question 2 */}
            <Image source={require('./img/golden.jpg')} style={{ width: "100%", height: 400 }} />
            <Text>Q2: What breed is this?</Text>
            <Picker selectedValue={type2} onValueChange={setType2}>
                <Picker.Item label="Select a breed..." value="" enabled={false} color="#999" />
                <Picker.Item label="Golden Retriever" value="Golden Retriever" />
                <Picker.Item label="Corgi" value="Corgi" />
                <Picker.Item label="Dachshund" value="Dachshund" />
            </Picker>

            {/* Question 3 */}
            <Image source={require('./img/kobs.jpg')} style={{ width: "100%", height: 400 }} />
            <Text>Q3: What breed is this?</Text>
            <Picker selectedValue={type3} onValueChange={setType3}>
                <Picker.Item label="Select a breed..." value="" enabled={false} color="#999" />
                <Picker.Item label="Golden Retriever" value="Golden Retriever" />
                <Picker.Item label="Corgi" value="Corgi" />
                <Picker.Item label="Dachshund" value="Dachshund" />
            </Picker>

            {/* Complete Button */}
            <Button title="Complete" onPress={handleComplete} />
        </ScrollView>
    );
}

export default MyApp;


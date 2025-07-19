import React, { useState } from 'react';
import { Alert, Dimensions, Image, Linking, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const PhoneImage = require('@/assets/images/Phone.png'); // Add your phone icon image
const { width: screenWidth } = Dimensions.get('window');

interface FormData {
  name: string;
  email: string;
  phone: string;
  description: string;
}

export default function ContactScreen() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    description: ''
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    // Validate form
    if (!formData.name || !formData.email || !formData.description) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    try {
      // You can implement your form submission logic here
      // For now, we'll just show an alert
      Alert.alert('Success', 'Your message has been sent!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        description: ''
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to send message. Please try again.');
    }
  };

  const handlePhoneCall = () => {
    Linking.openURL('tel:4047849030');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Contact Form */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Contact us</Text>
        
        {/* Phone Section */}
        <View style={styles.phoneSection}>
          <TouchableOpacity onPress={handlePhoneCall} style={styles.phoneButton}>
            <Image source={PhoneImage} style={styles.phoneIcon} />
            <Text style={styles.phoneText}>Phone : 404-784-9030</Text>
          </TouchableOpacity>
        </View>

        {/* Name Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Name <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={styles.textInput}
            value={formData.name}
            onChangeText={(value) => handleInputChange('name', value)}
            placeholder="Enter your name"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Email <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={styles.textInput}
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
            placeholder="Enter your email"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Phone Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Phone number <Text style={styles.optional}>(overflow)</Text>
          </Text>
          <TextInput
            style={styles.textInput}
            value={formData.phone}
            onChangeText={(value) => handleInputChange('phone', value)}
            placeholder="Enter your phone number"
            placeholderTextColor="#9CA3AF"
            keyboardType="phone-pad"
          />
        </View>

        {/* Description Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Short description <Text style={styles.required}>*</Text> <Text style={styles.optional}>(overflow)</Text>
          </Text>
          <TextInput
            style={[styles.textInput, styles.textArea]}
            value={formData.description}
            onChangeText={(value) => handleInputChange('description', value)}
            placeholder="Enter a short description"
            placeholderTextColor="#9CA3AF"
            multiline={true}
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        {/* Submit Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2937', // bg-gray-800 equivalent
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 32,
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 24,
  },
  phoneSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 24,
    paddingBottom: 24,
  },
  phoneButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneIcon: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  phoneText: {
    fontSize: 16,
    color: '#1F2937',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151', // text-gray-700
    marginBottom: 8,
  },
  required: {
    color: '#EF4444', // text-red-500
  },
  optional: {
    color: '#9CA3AF', // text-gray-400
    fontSize: 12,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#D1D5DB', // border-gray-300
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#374151', // text-gray-700
    backgroundColor: '#FFFFFF',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  submitButton: {
    backgroundColor: '#F97316', // bg-orange-500
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    minWidth: 120,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
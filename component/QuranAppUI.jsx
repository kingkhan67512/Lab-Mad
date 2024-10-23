import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';
import TabNavigation from './TabNavigation';

const QuranAppUI = () => {
  return (
    <View style={tw`flex-1 bg-purple-100 p-4`}>
      {/* Header */}
      <View style={tw`flex-row justify-between items-center mb-6`}>
        <Text style={tw`text-lg font-bold text-purple-800`}>Quran App</Text>
        <FontAwesome name="search" size={24} color="purple" />
      </View>

      {/* User Greeting */}
      <Text style={tw`text-lg font-semibold text-gray-800 mb-4`}>Assalamu Alaikum</Text>
      <Text style={tw`text-2xl font-bold text-purple-900 mb-8`}>Tanvir Ahassan</Text>

      {/* Last Read */}
      <View style={tw`bg-purple-200 rounded-lg p-4 mb-6 overflow-hidden shadow-lg`}>
      {/* Background Image */}
      <Image 
        source={{ uri: 'https://i.pinimg.com/736x/81/94/7f/81947f27675dab378e9e73c7d988f659.jpg' }} 
        style={[tw`absolute bottom-[0.1] left-0 w-100 h-40`, { opacity: 0.6 }]}  // Set the image to cover the background with opacity
        resizeMode="cover"   // Ensure the image covers the entire background
      />

      {/* Foreground Content */}
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`text-sm text-purple-800`}>Last Read</Text>
      </View>
      <Text style={tw`text-lg font-bold text-purple-900 mt-2`}>Al-Fatihah</Text>
      <Text style={tw`text-sm text-purple-700`}>Ayah No: 1</Text>
    </View>
      {/* Surah List */}
      <ScrollView>
        <TabNavigation/>
        {/* Al-Fatihah */}
        <View style={tw`bg-white rounded-lg p-4 mb-4 flex-row justify-between items-center shadow-sm`}>
          <View>
            <Text style={tw`text-lg font-semibold text-gray-800`}>Al-Fatihah</Text>
            <Text style={tw`text-sm text-gray-600`}>Meccan - 7 Verses</Text>
          </View>
          <Text style={tw`text-purple-800 text-xl`}>الفاتحة</Text>
        </View>

        {/* Al-Baqarah */}
        <View style={tw`bg-white rounded-lg p-4 mb-4 flex-row justify-between items-center shadow-sm`}>
          <View>
            <Text style={tw`text-lg font-semibold text-gray-800`}>Al-Baqarah</Text>
            <Text style={tw`text-sm text-gray-600`}>Medinian - 286 Verses</Text>
          </View>
          <Text style={tw`text-purple-800 text-xl`}>البقرة</Text>
        </View>

        {/* Ali 'Imran */}
        <View style={tw`bg-white rounded-lg p-4 mb-4 flex-row justify-between items-center shadow-sm`}>
          <View>
            <Text style={tw`text-lg font-semibold text-gray-800`}>Ali 'Imran</Text>
            <Text style={tw`text-sm text-gray-600`}>Meccan - 200 Verses</Text>
          </View>
          <Text style={tw`text-purple-800 text-xl`}>آل عمران</Text>
        </View>

        {/* An-Nisa */}
        <View style={tw`bg-white rounded-lg p-4 mb-4 flex-row justify-between items-center shadow-sm`}>
          <View>
            <Text style={tw`text-lg font-semibold text-gray-800`}>An-Nisa</Text>
            <Text style={tw`text-sm text-gray-600`}>Meccan - 176 Verses</Text>
          </View>
          <Text style={tw`text-purple-800 text-xl`}>النساء</Text>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={tw`flex-row justify-around mt-auto bg-white py-4 shadow-sm`}>
        <FontAwesome name="home" size={24} color="purple" />
        <FontAwesome name="book" size={24} color="purple" />
        <FontAwesome name="bell" size={24} color="purple" />
      </View>
    </View>
  );
};

export default QuranAppUI;

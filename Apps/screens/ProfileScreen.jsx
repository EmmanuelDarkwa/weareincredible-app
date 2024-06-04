import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

export default function ProfileScreen() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profileImage: 'https://via.placeholder.com/150',
    stats: {
      workoutsCompleted: 120,
      totalHours: 300,
      caloriesBurned: 25000,
    },
  };
  return (
    <View>
       <ScrollView style='flex-1 bg-gray-100'>
      <View style='items-center p-4 bg-white shadow-sm'>
        <Image
          source={{ uri: user.profileImage }}
          style='w-32 h-32 rounded-full mt-8'
        />
        <Text style='text-3xl font-bold mt-4'>{user.name}</Text>
        <Text style='text-lg text-gray-500'>{user.email}</Text>
      </View>
      <View style='flex-row justify-around p-4 mt-4 bg-white shadow-sm'>
        <View style='items-center'>
          <Text style='text-xl font-bold'>{user.stats.workoutsCompleted}</Text>
          <Text style='text-gray-500'>Workouts</Text>
        </View>
        <View style='items-center'>
          <Text style='text-xl font-bold'>{user.stats.totalHours}</Text>
          <Text style='text-gray-500'>Hours</Text>
        </View>
        <View style='items-center'>
          <Text style='text-xl font-bold'>{user.stats.caloriesBurned}</Text>
          <Text style='text-gray-500'>Calories</Text>
        </View>
      </View>
      <View style='p-4 mt-4 bg-white shadow-sm'>
        <Text style='text-2xl font-bold mb-4'>Recent Activities</Text>
        {/* Replace with actual activities */}
        <View style='mb-4'>
          <Text style='text-lg font-semibold'>Morning Run</Text>
          <Text style='text-gray-500'>5 km in 30 minutes</Text>
        </View>
        <View style='mb-4'>
          <Text style='text-lg font-semibold'>Yoga Session</Text>
          <Text style='text-gray-500'>60 minutes</Text>
        </View>
        <View style='mb-4'>
          <Text style='text-lg font-semibold'>Strength Training</Text>
          <Text style='text-gray-500'>45 minutes</Text>
        </View>
      </View>
      <TouchableOpacity style='p-4 mt-4 bg-red-500 rounded-lg mx-4'>
        <Text style='text-center text-white text-lg'>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  )
}
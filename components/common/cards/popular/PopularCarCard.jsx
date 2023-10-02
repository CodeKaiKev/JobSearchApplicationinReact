import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularcarcard.style'

const PopularCarCard = () => {
  return (
    <View>
      <TouchableOpacity style={styles.container(selectedCar, item)} onPress={() => handleCardPress(item)}>
        
        <TouchableOpacity style={style.logoContainer(selectedCar, item)}>
          <Image
            source={{ uri: item.employer_logo}}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </TouchableOpacity>
        <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default PopularCarCard
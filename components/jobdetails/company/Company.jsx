import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageURL } from '../../../utils'

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
      <Image
          source={{
            uri: checkImageURL(companyLogo)
              ? companyLogo
              : "https://t3.ftcdn.net/jpg/02/12/39/42/360_F_212394219_7chSxipeIoirB7rRkOQi0l8eHF4fNpiK.jpg",
          }}
          //resizeMode='contain'
          style={styles.logoImage}
        />
      </View>
      
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName}</Text>
        <View styles={styles.locationBox}>
          <Image source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
        </View>
      </View>
    </View>
  )
}

export default Company
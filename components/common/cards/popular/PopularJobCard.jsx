import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'
import {checkImageURL} from '../../../../utils';

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
  return (
    
      <TouchableOpacity style={styles.container(selectedJob, item)} onPress={() => handleCardPress(item)}>
        
        <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : "https://t3.ftcdn.net/jpg/02/12/39/42/360_F_212394219_7chSxipeIoirB7rRkOQi0l8eHF4fNpiK.jpg",
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
        <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
            {item.job_title}
          </Text>
          <Text style={styles.jobType}>{item.employer_company_type}</Text>

         
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.location}>{item.job_country}{item.job_city? " - "  + item.job_city : ""}</Text>
        </View>
        </TouchableOpacity>
 
  )
}

export default PopularJobCard;
import React from 'react'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'
import { AsyncStorage } from 'react-native'
import { useState } from 'react'


import styles from './footer.style'
import { icons } from '../../../constants'

const Footer = ({ url }) => {
  const [activeFavBtn, setActiveFavBtn] = useState(false);

  const buttonSwitcher = () => {
    if (activeFavBtn === false) {
      setActiveFavBtn(true)
    } else {
      setActiveFavBtn(false)
    }
  }

  const chnageImg = () => {
    if (activeFavBtn === false) {
     return icons.heartOutline
    } else {
     return icons.heart
    }  
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={buttonSwitcher} style={styles.likeBtn}>
        <Image 
          source={chnageImg()}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.applyBtn}
      onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}> Apply for job </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer
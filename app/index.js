import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbycars,
  Popularcars,
  ScreenHeaderBtn,
  Welcome,
} from "../components";



const Home = () => {
    const router = useRouter();
    
    return (
        //<Text>Kevin</Text>
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen options={{ headerStyle: { background: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension ="60%"/>
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension ="100%"/>
                ),
                headerTitle:""
                }} 
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    padding: SIZES.medium }}
                >
                <Welcome/>
                <Popularcars/>
                <Nearbycars/>
                </View>
            </ScrollView>
        </SafeAreaView>
       
    )
}

export default Home;
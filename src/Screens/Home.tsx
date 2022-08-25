import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import Poster from '../Components/Poster';

import Skates from '../Services/api';

export default function Home() {
    const translateX = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler((event) => {
        translateX.value = event.contentOffset.x;
    })

    return (
        <Animated.FlatList
            data={Skates}
            renderItem={({ item, index }) =>  <Poster item={item} index={index} translateX={translateX} />}
            keyExtractor={(item, index) => `${index}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            scrollEventThrottle={16}
            decelerationRate={0}
            bounces={false}
            onScroll={scrollHandler}
        />
    )
}

const styles = StyleSheet.create({

});

import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, PanResponder, LayoutChangeEvent, GestureResponderEvent } from 'react-native';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

interface AlphabetListProps {
  onSelectLetter: (letter: string) => void;
}

const AlphabetList: React.FC<AlphabetListProps> = ({ onSelectLetter }) => {
  const [currentLetter, setCurrentLetter] = useState<string | null>(null);
  const [layout, setLayout] = useState({ y: 0, height: 0 });

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    const { y, height } = event.nativeEvent.layout;
    setLayout({ y, height });
  }, []);

  const handleTouch = useCallback((event: GestureResponderEvent) => {
    const touchY = event.nativeEvent.pageY - layout.y;
    const itemHeight = layout.height / alphabet.length;
    const index = Math.floor(touchY / itemHeight);
    if (index >= 0 && index < alphabet.length) {
      const letter = alphabet[index];
      setCurrentLetter(letter);
      onSelectLetter(letter);
    }
  }, [layout, onSelectLetter]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: handleTouch,
    onPanResponderMove: handleTouch,
    onPanResponderRelease: () => setCurrentLetter(null),
  });

  return (
    <View 
      style={styles.container} 
      onLayout={handleLayout}
      {...panResponder.panHandlers}
    >
      {alphabet.map((letter) => (
        <Text 
          key={letter} 
          style={[
            styles.letter, 
            currentLetter === letter && styles.activeLetter
          ]}
        >
          {letter}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 5,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  letter: {
    color: '#007AFF',
    fontSize: 12,
    fontWeight: 'bold',
    padding: 2,
  },
  activeLetter: {
    color: '#ffffff',
    backgroundColor: '#007AFF',
    borderRadius: 10,
  },
});

export default AlphabetList;
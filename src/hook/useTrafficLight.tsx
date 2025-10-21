import { useEffect, useState } from 'react';

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = (initialColor: TrafficLightColor = 'red', initialTime: number = 5) => {
  
    const [light, setLight] = useState<TrafficLightColor>(initialColor);
    const [countdown, setCountdown] = useState(initialTime);

    // Countdown Effect
    useEffect(() => {
      if (countdown === 0) return;
    
      const intervalId = setInterval( () => {
        setCountdown( prev => prev - 1)
      }, 1000);

      return () => {
        clearInterval(intervalId);
      }

    }, [countdown]);
    
    // Change Light Color Effect 
    useEffect(() => {

        if (countdown > 0) return;

        setCountdown(5);

        if (light === 'red') {
            setLight('green');
            return;
        }

        if (light === 'yellow') {
            setLight('red');
            return;
        }

        if (light === 'green') {
            setLight('yellow');
            setCountdown(3);
            return;
        }

    }, [countdown, light]);

    return {
        // Props
        light, 
        countdown, 
        colors,

        // Computed
        percentage: (countdown / 5) * 100,
        greenLight: light === 'green' ? colors.green : 'bg-gray-500',
        yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
        redLight: light === 'red' ? colors.red : 'bg-gray-500',
        
        // Methods
    };
}

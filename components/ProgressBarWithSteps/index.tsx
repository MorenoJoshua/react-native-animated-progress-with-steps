import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

interface AnimatedProgressProps {
  progress: Animated.Value;
  width: number;
  height: number;
  onProgress?: (progress: number) => void;
  trackColor?: string;
  color?: string;
}

interface ProgressStepProps {
  size: number;
  label: string | number;
  position: number;
  progress: Animated.Value;
  checkedColor?: string;
  uncheckedColor?: string;
}
const ProgressStep: React.FC<ProgressStepProps> = ({
  size,
  label,
  position,
  progress,
  checkedColor = '#00a680',
  uncheckedColor = '#d3d3d3',
}) => {
  const [checked, setChecked] = React.useState(false);
  useEffect(() => {
    const sub = progress.addListener(v => {
      if (v.value >= position) {
        setChecked(true);
      } else {
        setChecked(false);
      }
    });
    return () => {
      progress.removeListener(sub);
    };
  }, [position, progress]);
  const borderWidth = 2;
  return (
    <View
      style={{
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        left: `${position * 100}%`,
        top: -(size / 2) + borderWidth,
        alignItems: 'center',
      }}>
      <View
        style={{
          borderRadius: size / 2,
          width: size,
          height: size,
          backgroundColor: checked ? checkedColor : uncheckedColor,
          borderWidth,
          borderColor: checked ? '#fff' : uncheckedColor,
        }}
      />
      <View>
        <Text>{label}</Text>
      </View>
    </View>
  );
};
const AnimatedProgress: React.FC<AnimatedProgressProps> = ({
  width = 10,
  height = 8,
  progress,
  trackColor = '#ccc',
  color = '#00f',
}) => {
  return (
    <View
      style={{
        width,
        height: height,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: height / 2,
        backgroundColor: trackColor,
      }}>
      <View
        style={{
          width,
          height: height,
          position: 'absolute',
        }}
      />
      <Animated.View
        style={{
          width,
          height: height,
          position: 'absolute',
          backgroundColor: color,
          borderRadius: height / 2,
          transform: [
            {
              translateX: Animated.add(
                -width,
                Animated.multiply(
                  progress,
                  Animated.add(
                    width,
                    Animated.multiply(progress, height / 2 / 2),
                  ),
                ),
              ),
            },
          ],
        }}
      />
    </View>
  );
};

type ProgressBarConfig = {
  label: string;
  position: number;
  checkedColor?: string;
}[];
interface ProgressBarWithStepsProps {
  steps: ProgressBarConfig;
  progress: number;
  checkedColor?: string;
  uncheckedColor?: string;
  height?: number;
}
const ProgressBarWithSteps: React.FC<ProgressBarWithStepsProps> = ({
  height = 20,
  checkedColor = '#e63',
  uncheckedColor = '#ccc',
  steps = [],
  progress,
}) => {
  const animatedProgress = useRef(new Animated.Value(0)).current;

  const width = Dimensions.get('window').width;

  const indicatorSize = 16;
  const trackHeight = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(animatedProgress, {
        toValue: Math.random(),
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 1300);
    return () => clearInterval(interval);
  }, [animatedProgress]);

  return (
    <View
      style={{
        position: 'relative',
        height,
      }}>
      <AnimatedProgress
        width={width}
        height={trackHeight}
        progress={animatedProgress}
        onProgress={console.log}
        color={checkedColor}
        trackColor={uncheckedColor}
      />
      {steps
        // .sort((a, b) => a.position - b.position)
        .map(data => {
          console.log(data);
          return (
            <ProgressStep
              size={indicatorSize}
              label={data.label}
              position={data.position}
              progress={animatedProgress}
              checkedColor={checkedColor}
              uncheckedColor={uncheckedColor}
            />
          );
        })}
    </View>
  );
};

export default ProgressBarWithSteps;

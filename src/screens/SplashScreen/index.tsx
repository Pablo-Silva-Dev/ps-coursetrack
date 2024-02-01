/* eslint-disable quotes */
import { FontAwesome } from '@expo/vector-icons';
import { useCallback, useEffect } from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { light as lightTheme } from 'themes/light';
import { Container, GradientContainer, LogoTitle } from './styles';

export function SplashScreen() {
  const { theme } = lightTheme;
  const splashAnimationSharedValue = useSharedValue(0);

  const ANIMATION_DURATION = 2400;
  const ANIMATION_INITIAL_VALUE = 0;
  const ANIMATION_TRANSLATION_REASON = 50;
  const ANIMATION_OPACITY_REASON = 1;

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        splashAnimationSharedValue.value,
        [ANIMATION_INITIAL_VALUE, ANIMATION_TRANSLATION_REASON],
        [ANIMATION_INITIAL_VALUE, ANIMATION_OPACITY_REASON]
      ),
      transform: [
        {
          translateX: interpolate(
            splashAnimationSharedValue.value,
            [ANIMATION_INITIAL_VALUE, ANIMATION_TRANSLATION_REASON],
            [ANIMATION_INITIAL_VALUE, -ANIMATION_TRANSLATION_REASON],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  const capitalTextStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        splashAnimationSharedValue.value,
        [
          ANIMATION_INITIAL_VALUE,
          ANIMATION_TRANSLATION_REASON * 0.5,
          ANIMATION_TRANSLATION_REASON,
        ],
        [
          ANIMATION_INITIAL_VALUE,
          ANIMATION_OPACITY_REASON * 0.1,
          ANIMATION_OPACITY_REASON,
        ]
      ),
      transform: [
        {
          translateX: interpolate(
            splashAnimationSharedValue.value,
            [ANIMATION_TRANSLATION_REASON * 2, ANIMATION_INITIAL_VALUE],
            [ANIMATION_TRANSLATION_REASON * 2, ANIMATION_TRANSLATION_REASON],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  const startApp = useCallback(() => {
    console.log('App started');
  }, []);

  useEffect(() => {
    splashAnimationSharedValue.value = withTiming(
      ANIMATION_TRANSLATION_REASON,
      { duration: ANIMATION_DURATION },
      () => {
        'worklet';
        runOnJS(startApp);
      }
    );
  }, [splashAnimationSharedValue, startApp]);

  return (
    <Container>
      <GradientContainer
        colors={[theme.colors.primary, theme.colors.absolute_black]}
      />
      <Animated.View style={[logoStyle, { position: 'absolute' }]}>
        <FontAwesome name="hourglass-end" size={96} color="#FFFFFF" />
      </Animated.View>
      <Animated.View style={[capitalTextStyle, { position: 'absolute' }]}>
        <LogoTitle>{`Plataforma de\nCurso Online`}</LogoTitle>
      </Animated.View>
    </Container>
  );
}

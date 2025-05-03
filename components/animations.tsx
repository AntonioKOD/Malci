// filename: animations.client.ts
'use client';

import anime from 'animejs/lib/anime.es.js';

/**
 * Fades an element in by moving it up from 50px below.
 * @param target CSS selector or element reference
 * @param delay  Delay before animation starts (ms)
 * @param duration Duration of animation (ms)
 */
export const fadeInUp = (
  target: string | Element | (string | Element)[],
  delay = 0,
  duration = 800
) =>
  anime({
    targets: target,
    opacity: [0, 1],
    translateY: [50, 0],
    easing: 'easeOutExpo',
    duration,
    delay,
  });

/**
 * Fades an element in without movement.
 * @param target CSS selector or element reference
 * @param delay  Delay before animation starts (ms)
 * @param duration Duration of animation (ms)
 */
export const fadeIn = (
  target: string | Element | (string | Element)[],
  delay = 0,
  duration = 800
) =>
  anime({
    targets: target,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration,
    delay,
  });

/**
 * Staggers fadeInUp across multiple targets.
 * @param target CSS selector or array of elements
 * @param staggerDelay Delay between each item's start (ms)
 * @param delay Initial delay before the first animation (ms)
 * @param duration Duration of each animation (ms)
 */
export const staggerFadeInUp = (
  target: string | Element | (string | Element)[],
  staggerDelay = 100,
  delay = 0,
  duration = 800
) =>
  anime({
    targets: target,
    opacity: [0, 1],
    translateY: [50, 0],
    easing: 'easeOutExpo',
    duration,
    delay: anime.stagger(staggerDelay, { start: delay }),
  });

/**
 * Slides elements in from a given direction.
 * @param target   CSS selector or element reference
 * @param direction 'left' | 'right' | 'up' | 'down'
 * @param delay     Delay before animation starts (ms)
 * @param duration  Duration of animation (ms)
 */
export const slideIn = (
  target: string | Element | (string | Element)[],
  direction: 'left' | 'right' | 'up' | 'down' = 'left',
  delay = 0,
  duration = 800
) => {
  const [translateX, translateY] =
    direction === 'left'
      ? [[-100, 0], 0]
      : direction === 'right'
      ? [[100, 0], 0]
      : direction === 'up'
      ? [0, [-100, 0]]
      : [0, [100, 0]];

  return anime({
    targets: target,
    translateX,
    translateY,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration,
    delay,
  });
};

/**
 * Reveals text by animating clip-path.
 * @param target CSS selector or element reference
 * @param delay  Delay before animation starts (ms)
 */
export const revealText = (
  target: string | Element | (string | Element)[],
  delay = 0
) =>
  anime({
    targets: target,
    clipPath: ['inset(0 100% 0 0)', 'inset(0 0 0 0)'],
    easing: 'easeInOutQuint',
    duration: 1000,
    delay,
  });

/**
 * Animates a button on hover to scale up slightly.
 * @param target CSS selector or element reference
 */
export const buttonHover = (target: string | Element) =>
  anime({
    targets: target,
    scale: 1.05,
    duration: 300,
    easing: 'easeOutElastic(1, .6)',
  });

/**
 * Reverts button scale when hover ends.
 * @param target CSS selector or element reference
 */
export const buttonLeave = (target: string | Element) =>
  anime({
    targets: target,
    scale: 1,
    duration: 300,
    easing: 'easeOutElastic(1, .6)',
  });
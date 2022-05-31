export const framer_toggle = {
  initial: {
    y: '-100%',
    opacity: 0,
  },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
  exit: {
    y: '100%',
    opacity: 0,
  },
  transition: { duration: 0.3 },
}

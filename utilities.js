/**
 * Tailwindcss Configuration
 */

const colors = {
  'white': 'var(--dh-color-white)',
  'black': 'var(--dh-color-black)',
  'primary': 'var(--dh-color-primary)',
  't0': 'var(--dh-color-background)',
  't1': 'var(--dh-color-background-t1)'
};

const spacing = {
  '0': 'var(--dh-space-0)',
  'half': 'var(--dh-space-half)',
  '1': 'var(--dh-space-1)',
  '2': 'var(--dh-space-2)',
  '3': 'var(--dh-space-3)',
  '4': 'var(--dh-space-4)',
  '5': 'var(--dh-space-5)',
  '6': 'var(--dh-space-6)',
  '7': 'var(--dh-space-7)',
  '8': 'var(--dh-space-8)'
};

const screens = {
  'xlarge': 'var(--dh-screen-xlarge)',
  'large': 'var(--dh-screen-large)',
  'desktop': 'var(--dh-screen-desktop)',
  'tablet': 'var(--dh-screen-tablet)',
  'mobile': 'var(--dh-screen-mobile)',
  'small': 'var(--dh-screen-small)',
  'xsmall': 'var(--dh-screen-xsmall)'
};

const media = {
  'xlarge': '1441px',
  'large': '1280px',
  'desktop': '960px',
  'tablet': '768px',
  'mobile': '480px',
  'small': '400px',
  'xsmall': '300px'
};

const widths = {
  'auto': 'auto',
  'full': '100%',
  ...spacing,
  ...screens
};

const heights = {
  'auto': 'auto',
  '100vh': '100vh',
  '80vh': '80vh',
  '70vh': '70vh',
  '60vh': '60vh',
  '50vh': '50vh',
  '40vh': '40vh',
  '30vh': '30vh',
  '20vh': '20vh',
  '10vh': '10vh',
  'full': '100%',
  ...spacing,
  ...screens
};

const border = {
  '0': 'var(--dh-border-0)',
  'DEFAULT': 'var(--dh-border-default)',
  '1': 'var(--dh-border-1)',
  '2': 'var(--dh-border-2)',
  '3': 'var(--dh-border-3)',
  '4': 'var(--dh-border-4)',
  '5': 'var(--dh-border-5)',
  '6': 'var(--dh-border-6)',
  '7': 'var(--dh-border-7)',
  '8': 'var(--dh-border-8)'
};

module.exports = {
  important: true,
  content: [
    '**/dist/**/*.html'
  ],
  theme: {
    colors: colors,
    width: widths,
    maxWidth: widths,
    height: heights,
    minHeight: heights,
    spacing: spacing,
    borderWidth: border,
    borderRadius: border,
    screens: media
  }
};

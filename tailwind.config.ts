
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				brand: {
					black: '#0F0F0F',
					champagne: '#F5E9DA',
					gold: '#C6A15B',
					bronze: '#A47148',
					orange: '#C6A15B',
					'orange-light': '#D8BC7C',
					'orange-dark': '#A47148',
					'orange-accent': '#FF5400',
				},
				glass: {
					white: 'rgba(255, 255, 255, 0.1)',
					dark: 'rgba(0, 0, 0, 0.2)',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'playfair': ['Playfair Display', 'serif'],
			},
			backdropBlur: {
				'xs': '2px',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'smoke-float': {
					'0%': {
						transform: 'translateY(0px) translateX(0px) rotate(0deg)',
						opacity: '0.3'
					},
					'25%': {
						transform: 'translateY(-10px) translateX(5px) rotate(90deg)',
						opacity: '0.5'
					},
					'50%': {
						transform: 'translateY(-20px) translateX(-5px) rotate(180deg)',
						opacity: '0.7'
					},
					'75%': {
						transform: 'translateY(-10px) translateX(10px) rotate(270deg)',
						opacity: '0.4'
					},
					'100%': {
						transform: 'translateY(0px) translateX(0px) rotate(360deg)',
						opacity: '0.3'
					}
				},
				'smoke-drift': {
					'0%': {
						transform: 'translateX(-100px)',
						opacity: '0'
					},
					'10%': {
						opacity: '0.3'
					},
					'90%': {
						opacity: '0.3'
					},
					'100%': {
						transform: 'translateX(100vw)',
						opacity: '0'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.8)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
			},
			animation: {
				'smoke-float': 'smoke-float 8s ease-in-out infinite',
				'smoke-drift': 'smoke-drift 15s linear infinite',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'fade-in-left': 'fade-in-left 0.8s ease-out',
				'fade-in-right': 'fade-in-right 0.8s ease-out',
				'scale-in': 'scale-in 0.6s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

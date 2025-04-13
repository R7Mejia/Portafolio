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
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Poppins', 'sans-serif'],
				mono: ['Fira Code', 'monospace'],
			},
			colors: {
				navy: {
					DEFAULT: '#0A192F',
					light: '#112240',
					lighter: '#233554',
				},
				slate: {
					DEFAULT: '#8892B0',
					light: '#A8B2D1',
					lighter: '#CCD6F6',
				},
				highlight: {
					DEFAULT: '#64FFDA',
					soft: '#7E69AB',
					deep: '#6E59A5',
				},
				background: {
					DEFAULT: '#F4F6F9',
					dark: '#1A1F2C',
				},
				accent: {
					soft: '#D6BCFA',
					bright: '#9b87f5',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				fadeInSlide: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				typewriter: {
					to: { left: '100%' }
				},
				blink: {
					'50%': { opacity: '0' }
				},
				glowPulse: {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(100, 255, 218, 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 20px rgba(100, 255, 218, 0.6)' 
					}
				},
				gradientMove: {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 0.5s ease-out forwards',
				'fade-in-slide': 'fadeInSlide 0.7s ease-out forwards',
				'typewriter': 'typewriter 2s steps(14) forwards',
				'blink': 'blink 0.7s infinite',
				'glow-pulse': 'glowPulse 2s ease-in-out infinite',
				'gradient-move': 'gradientMove 5s ease infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

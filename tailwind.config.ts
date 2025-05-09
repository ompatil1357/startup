
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
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                space: {
                    'purple': '#a259ff',
                    'pink': '#ff6ac2',
                    'dark': '#1A1F2C',
                    'light': '#F6F7F9',
                    'gray': '#8A898C',
                    'silver': '#C8C8C9',
                    'accent': '#0FA0CE',
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'fade-in': {
                    '0%': { 
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': { 
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'fade-out': {
                    '0%': { 
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                    '100%': { 
                        opacity: '0',
                        transform: 'translateY(10px)'
                    }
                },
                'slide-in': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' }
                },
                'slide-up': {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                'scale-in': {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' }
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                'glow': {
                    '0%, 100%': { 
                        boxShadow: '0 0 5px rgba(162, 89, 255, 0.3), 0 0 10px rgba(162, 89, 255, 0.2)' 
                    },
                    '50%': { 
                        boxShadow: '0 0 10px rgba(162, 89, 255, 0.5), 0 0 20px rgba(162, 89, 255, 0.3)' 
                    }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.5s ease-out',
                'fade-out': 'fade-out 0.5s ease-out',
                'slide-in': 'slide-in 0.5s ease-out',
                'slide-up': 'slide-up 0.5s ease-out',
                'scale-in': 'scale-in 0.3s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 3s ease-in-out infinite'
			},
            fontFamily: {
                'mono': ['Space Mono', 'monospace'],
                'sans': ['Inter', 'sans-serif'],
                'calibri': ['Calibri', 'Arial', 'sans-serif'],
                'heming': ['Heming', 'sans-serif'],
            },
            backdropBlur: {
                'xs': '2px',
            },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

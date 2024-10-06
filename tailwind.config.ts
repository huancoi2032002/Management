import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{html,js,ts,jsx,tsx}'], // Đảm bảo đường dẫn content bao gồm các tệp cần xử lý
    theme: {
        extend: {
            width: {
                '55': '220px',
                '100': '400px',
            },
            backgroundColor: {
                'gray-blue-gray-3': '#A9A9B0',
                'orange-orange-500': '#FF7506',
                'orange-orange-400': '#FF9138',
                'orange-orange-300': '#FFAC6A',
                'orange-orange-200': '#FFC89B',
                'orange-orange-50': '#FFF2E7',
                'bg-dashboard': '#F6F6F6'
            },
            textColor: {
                'queue-primary-text': '#F5F5F5',
                'gray-blue-gray-3': '#A9A9B0',
                'orange-orange-600': '#BF5805',
                'orange-orange-500': '#FF7506',
                'orange-orange-400': '#FF9138',
                'orange-orange-300': '#FFAC6A',
                'orange-orange-200': '#FFC89B',
                'queue-red': '#E73F3F',
                'gray-gray-300': '#7E7D88',
                'gray-gray-400': '#535261',
                
            },
            fontFamily: {
                'nunito': ['Nunito', 'sans-serif'],
            },
            borderColor: {
                'gray-gray-100': '#D4D4D7',

                'gray-blue-gray-3': '#A9A9B0',
                'orange-orange-500': '#FF7506',
                'orange-orange-400': '#FF9138',
                'orange-orange-300': '#FFAC6A',
            },
            fill: {
                'queue-primary-text': '#F5F5F5',
                'gray-blue-gray-3': '#A9A9B0',
                'orange-orange-500': '#FF7506',
                'orange-orange-400': '#FF9138',
                'orange-orange-300': '#FFAC6A',
                'queue-red': '#E73F3F',
                'gray-gray-300': '#7E7D88',
                'gray-gray-50': '#EAEAEC',
            },
            stroke: {
                'queue-primary-text': '#F5F5F5',
                'gray-blue-gray-3': '#A9A9B0',
                'orange-orange-500': '#FF7506',
                'orange-orange-400': '#FF9138',
                'orange-orange-300': '#FFAC6A',
                'queue-red': '#E73F3F',
                'gray-gray-300': '#7E7D88',
            },
        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'mx': '900px',
            // => @media (min-width: 900px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        }
    },
    plugins: [],
} satisfies Config;
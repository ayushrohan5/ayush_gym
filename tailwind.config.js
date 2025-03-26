const { heroui } = require("@heroui/react");

module.exports = {
    theme: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    
      content: [
        // ...
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
      ],
      theme: {
        extend: {},
      },
      darkMode: "class",
      plugins: [heroui()]
    
    
  };
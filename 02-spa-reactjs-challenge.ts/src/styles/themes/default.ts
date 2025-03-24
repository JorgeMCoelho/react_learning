export const defaultTheme = {
    
    colors: {
        white: "FFFFFF",

        "base-title": "#272221",
        "base-subtitle": "#403937",
        "base-text": "#574F4",
        "base-label": "#8D8686",
        "base-hover": "#D7D5D5",
        "base-button": "E6E5E5",
        "base-input": "#EDEDED",
        "base-card": "#F3F2F2",
        "background": "#FAFAFA",
        
        "yellow-dark": "#C47F17",
        "yellow": "#DBAC2C",
        "yellow-light": "#F1E9C9",

        "purple-dark": "#4B2995",
        "purple": "#8047F8",
        "purple-light": "#EBE5F9",
    },

    typography: {
        fonts: {
            primary: "Baloo 2, cursive",
            secondary: "Roboto, sans-serif",
        },
        titleXl:{
            size:"3rem",
            lineHeight:"130%",
            weight: "800",
            family: "primary",
        }
    }
} as const;
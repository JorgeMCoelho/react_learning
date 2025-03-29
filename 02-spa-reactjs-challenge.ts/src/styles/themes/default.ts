export const defaultTheme = {
    
    colors: {
        "white": "#FFFFFF",

        "base-title": "#272221",
        "base-subtitle": "#403937",
        "base-text": "#574F4D",
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
            primary: "'Baloo 2'",
            secondary: "Roboto, sans-serif",
        },
        titleXl:{
            size:"3rem",
            lineHeight:"130%",
            weight: "800",
            family: "primary",
        },
        titleL:{
            size:"2rem",
            lineHeight:"130%",
            weight:"800",
            family:"primary",
        },
        titleM:{
            size:"1.5rem",
            lineHeight:"130%",
            weight:"800",
            family:"primary",
        },
        titleS:{
            size:"1.25",
            lineHeight:"130%",
            weight:"700",
            family:"primary",
        },
        titleXs:{
            size:"1.125rem",
            lineHeight:"130%",
            weight:"700",
            family:"primary",
        },
        textL:{
            size:"1.25rem",
            lineHeight:"130%",
            weight:"600",
            family:"secondary",
        },
        textM:{
            size:"1rem",
            lineHeight:"130%",
            weight:"600",
            family:"secondary",
        },
        textS:{
            size:"0.875rem",
            lineHeight:"130%",
            weight:"500",
            family:"secondary",
        },
        textXs:{
            size:"0.75rem",
            lineHeight:"130%",
            weight:"600",
            family:"secondary",
        },
        tag:{
            size:"0.625rem",
            lineHeight:"130%",
            weight:"600",
            family:"secondary",
        },
        buttonG:{
            size:"0.875rem",
            lineHeight:"160%",
            weight:"600",
            family:"secondary",
        },
        buttonM:{
            size:"0.75rem",
            lineHeight:"160%",
            weight:"500",
            family:"secondary",
        }
            
        
    }
} as const;
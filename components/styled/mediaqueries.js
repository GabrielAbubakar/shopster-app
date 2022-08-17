// Configuration for different media sizes for this App
// The most commonly used sizes for the app will be as follows:
// Phone: mobileL @ 425px
// Tablet: tablet @ 768px
// Small-Laptop: laptop @ 1024px
// Other sizes will be use for further fine tuning as required


const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '475px',
    tablet: '768px',
    laptop: '1024px',
    laptopM: '1440px',
    laptopL: '1600px',
    desktop: '2560px',
};


export const devices = {
    mobileM: `(max-width: ${sizes.mobileM})`,
    mobileS: `(max-width: ${sizes.mobileS})`,
    mobileL: `(max-width: ${sizes.mobileL})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptop: `(max-width: ${sizes.laptop})`,
    laptopM: `(min-width: ${sizes.laptopM})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(max-width: ${sizes.desktop})`,
};
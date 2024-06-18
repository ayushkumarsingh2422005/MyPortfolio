function getRandomLightHexColor() {
    const getRandomComponent = () => Math.floor(Math.random() * 128) + 128;

    // Convert the number to a 2-digit hex string
    const componentToHex = (c) => c.toString(16).padStart(2, '0');

    // Get random components for red, green, and blue
    const r = getRandomComponent();
    const g = getRandomComponent();
    const b = getRandomComponent();

    // Construct the hex color string
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}

export default getRandomLightHexColor;
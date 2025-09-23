export const ColorRandom = () => {
    const colors = [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40',
        '#FF6384',
        '#C9CBCF',
        '#4BC0C0',
        '#FF6384'
    ];
    
    return colors[Math.floor(Math.random() * colors.length)];
};

export const generateRandomColors = (count: number) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
        colors.push(ColorRandom());
    }
    return colors;
};
export const ColorRandom = (data: any) => {
    const bgColor = data.map(() => `hsl(${Math.floor(Math.random() * 360)}, 60%, 40%)`)
    return bgColor
}
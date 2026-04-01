export function SVG({
    width=24,
    height=24,
    viewBox="0 0 24 24",
    fill="none",
    xmlns="http://www.w3.org/2000/svg",
    ...props
}) {
    return (
        <svg 
        width={width} 
        height={height} 
        viewBox={viewBox} 
        fill={fill} 
        xmlns={xmlns}
        {...props} />
    )
}



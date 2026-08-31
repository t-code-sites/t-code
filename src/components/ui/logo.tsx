import logoPath from '@/assets/brand/logo-svg.svg';

interface logoProps {
    width: number;
    height: number;
}

function Logo({width, height}: logoProps) {
    return (
        <>
            <img src={logoPath} alt="T-Code Soluções" width={width} height={height} draggable={false}/>
        </>
    );
}

export default Logo;
import React from "react";

interface ImageProps {
    src: string;
    alt: string;
    caption: string;
    className?: string; // 可选的样式
    width?: string | number; // 可选的宽度
    height?: string | number; // 可选的高度
}

const Image: React.FC<ImageProps> = ({
    src,
    alt,
    caption,
    width = '100%', // 默认宽度 100%
    height = 'auto' // 默认高度自适应
}) => {
    return (
        <figure>
            <a href={src}>
                <img src={src} alt={alt} width={width} height={height} />
            </a>
            <figcaption>{caption}</figcaption>
        </figure>
    );
};

export default Image;

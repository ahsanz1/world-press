import React from "react";

interface IconProps {
  src?: string;
  srcOnHover?: string;
  alt?: string;
  className?: string;
  text?: string;
  textClassName?: string;
  imgClassName?: string;
}

export const Icon: React.FC<IconProps> = ({
  src,
  srcOnHover,
  alt,
  className,
  text,
  textClassName,
  imgClassName,
}) => (
  <span className={className}>
    {text ? <p className={textClassName}>{text}</p> : ""}
    <img
      src={src}
      alt={alt}
      onMouseOver={(e): void => {
        srcOnHover && (e.currentTarget.src = srcOnHover);
      }}
      onMouseOut={(e): void => {
        srcOnHover && (e.currentTarget.src = src || "");
      }}
      className={imgClassName}
    />
  </span>
);

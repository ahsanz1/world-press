import React from "react";

interface IconProps {
  src?: string;
  srcOnHover?: string;
  alt?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  src,
  srcOnHover,
  alt,
  className,
}) => (
  <img
    src={src}
    alt={alt}
    onMouseOver={(e): void => {
      srcOnHover && (e.currentTarget.src = srcOnHover);
    }}
    onMouseOut={(e): void => {
      srcOnHover && (e.currentTarget.src = src || "");
    }}
    className={className}
  />
);

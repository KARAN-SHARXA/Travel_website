import { memo } from 'react';

type Loading = 'eager' | 'lazy';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: Loading;
  priority?: boolean;
  sizes?: string;
  onError?: React.ReactEventHandler<HTMLImageElement>;
}

const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
  priority = false,
  sizes,
  onError,
}: OptimizedImageProps) => {
  const extraImgProps: Record<string, unknown> = {};

  if (priority) {
    extraImgProps.fetchpriority = 'high';
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading}
      decoding="async"
      sizes={sizes}
      onError={onError}
      {...(extraImgProps as any)}
    />
  );
};

export default memo(OptimizedImage);

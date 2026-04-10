type LogoProps = {
  appearance?: 'primary' | 'light';
  className?: string;
};

export default function Logo({ appearance = 'primary', className }: LogoProps) {
  const isLight = appearance === 'light';
  return (
    <img
      alt="HOMA Logo"
      className={`logo${className ? ` ${className}` : ''}`}
      src={isLight ? '/logo-light.svg' : '/logo-primary.svg'}
    />
  );
}

export type ButtonProps = {
  title: string;
  className?: string;
  type?: 'primary' | 'secondary';
  onClick: () => void;
};

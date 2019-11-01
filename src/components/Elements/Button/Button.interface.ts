export interface IButtonProps {
  text?: string,
  icon?: string,
  to?: string,
  className?: string,
  type?: string,
  disabled?: boolean,
  onClickButton?(event: React.MouseEvent): void
}
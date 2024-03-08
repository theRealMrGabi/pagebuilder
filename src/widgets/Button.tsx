import { PropsWithChildren } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({
	children,
	...rest
}: PropsWithChildren<ButtonProps>) => {
	return <button {...rest}>{children}</button>;
};

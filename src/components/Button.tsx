import { PropsWithChildren } from "react";
import { ButtonProps } from "../interface";

export const Button = ({
	children,
	className,
	...rest
}: PropsWithChildren<ButtonProps>) => {
	return (
		<button
			{...rest}
			className={`${className} appearance-none items-center box-border select-none inline-flex flex-shrink-0 justify-center rounded-md p-2 m-2`}
			style={{}}
		>
			{children}
		</button>
	);
};

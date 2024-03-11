import { PropsWithChildren } from "react";

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = ({ children, ...rest }: PropsWithChildren<Props>) => {
	return (
		<label
			{...rest}
			className="m-0 block select-none text-black capitalize opacity-90 text-center p-1"
		>
			{children}
		</label>
	);
};

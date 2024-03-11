import { PropsWithChildren } from "react";

interface Props {
	selected: boolean;
	nodeName: string;
	setCustom: unknown;
}

export const SettingsWrapper = ({ children }: PropsWithChildren<Props>) => {
	return <div className="wrapper">{children}</div>;
};

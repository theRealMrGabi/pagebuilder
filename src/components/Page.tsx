import { PropsWithChildren } from "react";
import { useNode } from "@craftjs/core";
import { SettingsWrapper } from "./SettingsWrapper";
import { Label } from "./Label";

interface Props {
	tagName?: keyof HTMLElementTagNameMap;
}

export const Page = ({ children, ...rest }: PropsWithChildren<Props>) => {
	const {
		connectors: { connect },
	} = useNode();
	return (
		//@ts-expect-error package not fully typed
		<div ref={connect} {...rest}>
			{children}
		</div>
	);
};

const PageSettings = () => {
	const {
		selected,
		nodeName,
		actions: { setCustom },
	} = useNode((node) => ({
		background: node.data.props.background,
		padding: node.data.props.padding,
		selected: node.events.selected,
		nodeName: node.data.custom.nodeName,
	}));

	return (
		<SettingsWrapper
			selected={selected}
			nodeName={nodeName}
			setCustom={setCustom}
		>
			this is page settings texxt
			<Label>I am a page label</Label>
		</SettingsWrapper>
	);
};

const PageDefaultProps = {
	background: "#fbfcfd",
	padding: 40,
};

Page.craft = {
	displayName: "Page",
	props: PageDefaultProps,
	custom: {
		nodeName: "Page",
	},
	related: {
		settings: PageSettings,
	},
};

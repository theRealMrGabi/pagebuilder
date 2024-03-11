/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useNode, Element } from "@craftjs/core";

import { Button } from "../components/Button";
import { WidgetText } from "./Text";
import { ButtonProps } from "../interface";
import { SettingsWrapper } from "../components/SettingsWrapper";
import { Label } from "../components/Label";

interface Props extends ButtonProps {
	skipParentNode: boolean;
	text: string;
}

export const WidgetButton = ({
	skipParentNode = false,
	text,
	...rest
}: Props) => {
	const {
		connectors: { connect },
		actions: { setCustom },
	} = useNode();

	useEffect(() => {
		if (skipParentNode) {
			setCustom((custom: any) => (custom.skipParentNode = true));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Button {...rest} style={rest.style} ref={connect}>
			<Element
				is={WidgetText}
				showBorder={false}
				id="button__text-value"
				text={text || "Click me"}
			/>
		</Button>
	);
};

const WidgetButtonSettings = () => {
	const {
		selected,
		nodeName,
		actions: { setCustom },
	} = useNode((node) => ({
		selected: node.events.selected,
		nodeName: node.data.custom.nodeName,
	}));

	return (
		<SettingsWrapper
			selected={selected}
			nodeName={nodeName}
			setCustom={setCustom}
		>
			<Label htmlFor="text__font-weight">Font Weight</Label>
			<Label htmlFor="text__font-weight">Color</Label>
			<Label htmlFor="text__font-weight">Font size</Label>
		</SettingsWrapper>
	);
};

WidgetButton.craft = {
	displayName: "Button",
	props: {
		className: "bg-red-600",
	},
	custom: {
		skipParentNode: false,
		nodeName: "Button",
	},
	related: {
		settings: WidgetButtonSettings,
	},
};

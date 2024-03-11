import { useState, useEffect, CSSProperties } from "react";
import { useNode, useEditor } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import classNames from "classnames";

import { Label } from "../components/Label";
import { SettingsWrapper } from "../components/SettingsWrapper";

interface Props {
	skipParentNode?: boolean;
	style?: Partial<CSSProperties>;
	text?: string;
	tagName?: keyof HTMLElementTagNameMap;
	showBorder?: boolean;
}

interface SetCustomProps {
	skipParentNode: boolean;
}

interface SetProps {
	text: string;
}

export const WidgetText = ({
	skipParentNode,
	style,
	text,
	showBorder = true,
	tagName = "p",
}: Props) => {
	const [editable, setEditable] = useState(false);

	const {
		id,
		selected,
		connectors: { connect },
		actions: { setProp, setCustom },
	} = useNode((node) => ({
		selected: node.events.selected,
	}));

	const { enabled } = useEditor((state) => ({
		enabled: state.options.enabled,
	}));

	// If node isn't selected disable ContentEditable
	useEffect(() => {
		!selected && setEditable(false);
	}, [selected]);

	useEffect(() => {
		if (skipParentNode) {
			setCustom((custom: SetCustomProps) => (custom.skipParentNode = true));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			className={classNames("rounded-lg", {
				"border border-slate-500 m-4 p-2": showBorder,
			})}
			style={{
				fontWeight: style?.fontWeight || 400,
				textAlign: style?.textAlign,
				width: `${style?.width}%`,
				fontSize: `${style?.fontSize}px`,
				lineHeight: `${style?.lineHeight}px`,
			}}
		>
			{/* <Label>New Widget Text Label</Label> */}
			<ContentEditable
				innerRef={connect}
				className={`apply-font-${id} outline-none`}
				tagName={tagName}
				html={text || ""}
				disabled={enabled ? !editable : true}
				onClick={() => setEditable(true)}
				onChange={(e) =>
					setProp(
						(props: SetProps) =>
							(props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
					)
				}
			/>
		</div>
	);
};

const WidgetTextSettings = () => {
	const {
		selected,
		nodeName,
		actions: { setCustom },
	} = useNode((node) => ({
		selected: node.events.selected,
		nodeName: node.data.custom.nodeName,
		activeFontFamily: node.data.props.activeFontFamily,
		fontSize: node.data.props.fontSize,
		fontWeight: node.data.props.fontWeight,
		textAlign: node.data.props.textAlign,
		color: node.data.props.color,
		lineHeight: node.data.props.lineHeight,
		width: node.data.props.width,
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

WidgetText.craft = {
	displayName: "Text",
	props: {
		text: "Hi",
		activeFontFamily: "Poppins",
		fontSize: 20,
		fontWeight: 400,
		textAlign: "left",
		lineHeight: 28,
		width: 100,
	},
	custom: {
		skipParentNode: false,
		nodeName: "Text",
	},
	related: {
		settings: WidgetTextSettings,
	},
};

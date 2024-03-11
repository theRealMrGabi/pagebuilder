import { useNode } from "@craftjs/core";
import { HiCloudArrowUp } from "react-icons/hi2";

import { useUpload } from "../hooks";
import { SettingsWrapper } from "../components/SettingsWrapper";
import { Label } from "../components/Label";

export const WidgetImage = () => {
	const { getRootProps, getInputProps, preview } = useUpload({});

	const selectedFilePreview = preview[preview.length - 1];

	return (
		<div className="border border-gray-500 p-4 rounded-lg my-4">
			<div {...getRootProps()} className="min-h-[20vh]">
				<HiCloudArrowUp className="text-slate-700 w-32 h-32" />
				<input
					{...getInputProps()}
					multiple={false}
					accept="image/*"
					type="file"
				/>

				{selectedFilePreview && (
					<img
						src={selectedFilePreview?.url}
						alt="editor image"
						className="p-2 object-contain w-32 h-32"
					/>
				)}
			</div>
		</div>
	);
};

const WidgetImageSettings = () => {
	const {
		selected,
		nodeName,
		actions: { setCustom },
	} = useNode((node) => ({
		src: node.data.props.src,
		width: node.data.props.width,
		height: node.data.props.height,
		objectFit: node.data.props.objectFit,
		selected: node.events.selected,
		nodeName: node.data.custom.nodeName,
	}));

	return (
		<SettingsWrapper
			selected={selected}
			nodeName={nodeName}
			setCustom={setCustom}
		>
			<Label htmlFor="text__font-weight">Drag and drop Image</Label>
		</SettingsWrapper>
	);
};

WidgetImage.craft = {
	displayName: "Image",
	props: {},
	custom: {
		nodeName: "Image",
	},
	related: {
		settings: WidgetImageSettings,
	},
};

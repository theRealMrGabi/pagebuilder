import { Element, useEditor } from "@craftjs/core";

import Tooltip from "./Tooltip";
import SquarePlusIcon from "../icons/square-plus.svg?react";
import LayoutIcon from "../icons/layout.svg?react";
import ImageIcon from "../icons/image.svg?react";
import AlertCircleIcon from "../icons/alert-circle.svg?react";
import SettingsIcon from "../icons/settings.svg?react";
import LogoIcon from "../icons/logo.svg?react";

import { WidgetText } from "../widgets/Text";
import { WidgetButton } from "../widgets/WidgetButton";
import { WidgetImage } from "../widgets/WidgetImage";

export const Toolbox = () => {
	const { connectors } = useEditor();

	return (
		<aside className="flex h-screen w-18 flex-col items-center border-r border-gray-200 bg-white">
			<div className="flex h-18 w-full items-center justify-center border-b border-gray-200">
				<LogoIcon />
			</div>
			<nav className="flex flex-1 flex-col gap-y-4 pt-10">
				<button
					type="button"
					className="group relative rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50"
					id="create__box"
					ref={(ref) =>
						connectors.create(
							ref!,
							<Element
								is={WidgetText}
								style={{
									fontWeight: 400,
									textAlign: "center",
									width: 62,
									fontSize: 20,
									fontFamily: "cursive",
									color: "green",
									lineHeight: "4px",
								}}
								canvas
							/>
						)
					}
				>
					<SquarePlusIcon className="h-6 w-6 stroke-current" />
					<Tooltip>Drag Text</Tooltip>
				</button>

				<button
					type="button"
					className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
					ref={(ref) =>
						connectors.create(
							ref!,
							<Element
								//@ts-expect-error package not fully typed
								is={WidgetButton}
								style={{
									fontWeight: 400,
									textAlign: "center",
									width: 62,
									fontSize: 20,
									fontFamily: "cursive",
									color: "green",
									lineHeight: "4px",
								}}
								canvas
							/>
						)
					}
				>
					<LayoutIcon className="h-6 w-6 stroke-current" />
					<Tooltip>Drag button</Tooltip>
				</button>

				<button
					type="button"
					className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
					ref={(ref) =>
						connectors.create(ref!, <Element is={WidgetImage} canvas />)
					}
				>
					<ImageIcon className="h-6 w-6 fill-current" />
					<Tooltip>Drag Images</Tooltip>
				</button>
			</nav>

			<div className="flex flex-col items-center gap-y-4 py-10">
				<button className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100">
					<AlertCircleIcon className="h-6 w-6 stroke-current" />
					<Tooltip>
						Help <span className="text-gray-400">(H)</span>
					</Tooltip>
				</button>
				<button className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100">
					<SettingsIcon className="h-6 w-6 stroke-current" />
					<Tooltip>
						Settings <span className="text-gray-400">(T)</span>
					</Tooltip>
				</button>
				<button className="mt-2 rounded-full bg-gray-100">
					<img
						className="h-10 w-10 object-cover"
						src="/img/avatar.png"
						alt=""
					/>
				</button>
			</div>
		</aside>
	);
};

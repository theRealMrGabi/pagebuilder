import { PropsWithChildren } from "react";
import { useEditor } from "@craftjs/core";

import { Toolbox } from "./Toolbox";
import { Header } from "./Header";
// import { SettingsPanel } from "./SettingsPanel";

export const Viewport = ({ children }: PropsWithChildren) => {
	const { connectors } = useEditor((state) => ({
		enabled: state.options.enabled,
	}));
	return (
		<div className="flex bg-gray-100 font-sans text-gray-900">
			<Toolbox />

			<div className="flex h-screen flex-1 flex-col">
				<Header />
				<main
					className="flex-1 overflow-y-scroll px-12"
					ref={(ref) => connectors.select(connectors.hover(ref!, null!), null!)}
				>
					{children}
				</main>
			</div>

			{/* {enabled ? <SettingsPanel /> : null} */}
		</div>
	);
};

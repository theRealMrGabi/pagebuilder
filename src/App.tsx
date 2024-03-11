import { useState, useEffect } from "react";
import { Editor, Frame, Element } from "@craftjs/core";

import { Page } from "./components/Page";
import { Viewport } from "./components/Viewport";

import { WidgetText } from "./widgets/Text";
import { WidgetButton } from "./widgets/WidgetButton";
import { WidgetImage } from "./widgets/WidgetImage";

function App() {
	const [shouldShowMessage, setShouldShowMessage] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(min-width: 1440px)");
		const handleResize = (event: MediaQueryListEvent) => {
			setShouldShowMessage(!event.matches);
		};

		// Initial check
		setShouldShowMessage(!mediaQuery.matches);

		// Listen for resize events
		mediaQuery.addEventListener("change", handleResize);

		// Clean up the event listener
		return () => {
			mediaQuery.removeEventListener("change", handleResize);
		};
	}, []);

	if (shouldShowMessage) {
		return (
			<div className="grid h-screen items-center place-content-center bg-slate-300">
				<h3 className="text-xl font-bold">
					Use a larger screen for beter experience
				</h3>
			</div>
		);
	}

	return (
		<Editor resolver={{ WidgetText, WidgetButton, WidgetImage, Page }}>
			<Viewport>
				<Frame>
					<Element is={Page} canvas>
						<Element
							is={WidgetText}
							tagName="p"
							id="canvas__intro-section-title"
							text="I am a sample Text editor"
							style={{
								fontWeight: 400,
								textAlign: "center",
								width: 62,
								fontSize: 20,
								fontFamily: "cursive",
								color: "green",
								lineHeight: "4px",
							}}
						/>

						<Element
							//@ts-expect-error package not fully typed
							is={WidgetButton}
							tagName="button"
							id="canvas__intro-section-title"
							text="I am a sample Button editor"
							className="text-white bg-green-600"
						/>

						<Element is={WidgetImage} id="canvas__intro-section-title" />
					</Element>
				</Frame>
			</Viewport>
		</Editor>
	);
}

export default App;

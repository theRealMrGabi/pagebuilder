import ChevronLeftIcon from "../icons/chevron-left.svg?react";
import ChevronDownIcon from "../icons/chevron-down.svg?react";
import EyeIcon from "../icons/eye.svg?react";
import DeviceDesktopIcon from "../icons/device-desktop.svg?react";
import DeviceTabletIcon from "../icons/device-tablet.svg?react";
import DeviceMobileIcon from "../icons/device-mobile.svg?react";
import DeviceMobilerotatedIcon from "../icons/device-mobile-rotated.svg?react";
import PackageIcon from "../icons/package.svg?react";

export const Header = () => {
	return (
		<header className="flex h-18 items-center justify-center gap-x-6 border-b border-gray-200 bg-white px-8">
			<button className="flex items-center justify-center rounded-xl bg-gray-100 p-2">
				<ChevronLeftIcon className="h-6 w-6 stroke-current text-gray-400" />
			</button>
			<button className="flex flex-col items-start rounded-xl border border-gray-200 bg-gray-100 px-6 py-2">
				<div className="flex items-center gap-x-2">
					<span className="text-sm">Page: Homepage - ABC</span>
					<ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400" />
				</div>
				<div className="text-xs text-gray-400">https://abc.com/</div>
			</button>
			<button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2">
				<EyeIcon className="h-6 w-6 stroke-current text-gray-400" />
				<span className="text-sm font-semibold leading-6">Preview</span>
			</button>

			{/* Separator */}
			<div className="h-full w-px bg-gray-200" />

			<div className="flex items-center gap-x-3">
				<button className="rounded-xl bg-gray-100 p-2 text-blue-600">
					<DeviceDesktopIcon className="h-6 w-6 stroke-current" />
				</button>
				<button className="rounded-xl p-2 text-gray-400 hover:bg-gray-100">
					<DeviceTabletIcon className="h-6 w-6 stroke-current" />
				</button>
				<button className="rounded-xl p-2 text-gray-400 hover:bg-gray-100">
					<DeviceMobileIcon className="h-6 w-6 stroke-current" />
				</button>
				<button className="rounded-xl p-2 text-gray-400 hover:bg-gray-100">
					<DeviceMobilerotatedIcon className="h-6 w-6 stroke-current" />
				</button>
			</div>

			{/* Separator */}
			<div className="h-full w-px bg-gray-200" />

			<button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2">
				<span className="text-sm font-semibold leading-6">960 PX / 100%</span>
				<ChevronDownIcon className="h-6 w-6 stroke-current text-gray-400" />
			</button>

			<button className="flex items-center justify-center rounded-xl bg-gray-100 p-2">
				<PackageIcon className="h-6 w-6 stroke-current text-gray-400" />
			</button>
		</header>
	);
};

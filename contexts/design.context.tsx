"use client";

import {
	type ComponentProps,
	createContext,
	useContext,
	useState,
} from "react";

interface Props {
	cursorVariant: IDesign["cursorVariant"];
	headerFont: IDesign["headerFont"];
	appFont: IDesign["appFont"];
}

const DesignContext = createContext<null | Props>(null);

export const useDesign = () => {
	const context = useContext(DesignContext);

	if (!context)
		throw new Error("Element must be child of '<DesignProvider />'");

	return context;
};

export const DesignProvider = ({
	designInit,
	children,
	...props
}: { designInit: IDesign } & ComponentProps<"div">) => {
	const [cursorVariant, setCursorVariant] = useState<Props["cursorVariant"]>(
		designInit.cursorVariant
	);
	const [headerFont, setHeaderFont] = useState<Props["headerFont"]>(
		designInit.headerFont
	);
	const [appFont, setAppFont] = useState<Props["appFont"]>(designInit.appFont);

	const contextValue: Props = {
		cursorVariant,
		headerFont,
		appFont,
	};

	return (
		<div {...props}>
			<DesignContext.Provider value={contextValue}>
				{children}
			</DesignContext.Provider>
		</div>
	);
};

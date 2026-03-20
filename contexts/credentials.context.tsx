"use client";

import {
	ComponentProps,
	createContext,
	type Dispatch,
	type SetStateAction,
	useContext,
	useState,
} from "react";

interface Props {
	credentials: ICredentials;
	setCredentials: Dispatch<SetStateAction<ICredentials>>;
}

const CredentialsContext = createContext<null | Props>(null);

export const useCredentials = () => {
	const context = useContext(CredentialsContext);

	if (!context)
		throw new Error("Element is not child of '<CredentialsProvider />'");

	return context;
};

export const CredentialsProvider = ({
	credentialsInit,
	children,
	...props
}: {
	credentialsInit: ICredentials;
} & ComponentProps<"div">) => {
	const [credentials, setCredentials] = useState<ICredentials>(credentialsInit);

	const contextValues: Props = {
		credentials,
		setCredentials,
	};

	return (
		<div {...props}>
			<CredentialsContext.Provider value={contextValues}>
				{children}
			</CredentialsContext.Provider>
		</div>
	);
};

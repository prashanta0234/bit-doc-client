import { create } from "zustand";

interface BoldState {
	isBold: boolean;
	toggleBold: (type: string) => void;
}
interface ItalicState {
	isItalic: boolean;
	toggleItalic: (type: string) => void;
}

interface UnderLineState {
	isUnderLine: boolean;
	toggleUnderLine: (type: string) => void;
}

export const useBoldStore = create<BoldState>((set) => ({
	isBold: false,
	toggleBold: (type: string) => {
		document.execCommand(type, false);
		set((state: BoldState) => ({ isBold: !state.isBold }));
	},
}));

export const useItalicStore = create<ItalicState>((set) => ({
	isItalic: false,
	toggleItalic: (type: string) => {
		document.execCommand(type, false);
		set((state: ItalicState) => ({ isItalic: !state.isItalic }));
	},
}));

export const useUnderLineStore = create<UnderLineState>((set) => ({
	isUnderLine: false,
	toggleUnderLine: (type: string) => {
		document.execCommand(type, false);
		set((state: UnderLineState) => ({ isUnderLine: !state.isUnderLine }));
	},
}));

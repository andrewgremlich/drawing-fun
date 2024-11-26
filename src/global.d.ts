
export type Interaction = {
	ctrlKey: boolean;
	altKey: boolean;
	shiftKey: boolean;
	buttonOn: boolean;
};

declare global {
	interface Window {
		drawAppStore: {
			mouse: {
				x: number;
				y: number;
			};
			interaction: Interaction;
		};
	}
}
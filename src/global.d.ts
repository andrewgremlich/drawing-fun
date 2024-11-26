
export type Interaction = {
	ctrlKey: boolean;
	altKey: boolean;
	button: boolean;
	shiftKey: boolean;
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
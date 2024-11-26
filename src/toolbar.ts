const rawPen = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  class="feather feather-pen-tool">
  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
  <path d="M2 2l7.586 7.586"></path>
  <circle cx="11" cy="11" r="2"></circle>
</svg>`;
const rawSquare = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
  stroke-linejoin="round" class="feather feather-square">
  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
</svg>`;
const rawCircle = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
  stroke-linejoin="round" class="feather feather-circle">
  <circle cx="12" cy="12" r="10"></circle>
</svg>`;

const GenerateToolbarButton = (
	icon: string,
	title: string,
	options?: { isDefault: boolean },
) => {
	const button = document.createElement("button");

	button.innerHTML = icon;
	button.classList.add("toolbar-button");
	button.title = title;

	if (options?.isDefault) {
		button.classList.add("active");
	}

	button.addEventListener("click", () => {
		button.classList.toggle("active");
	});

	// NOTE: window unload to remove event? not completely necessary but interesting

	return button;
};

export const createToolbar = () => {
	const toolbar = document.getElementById("toolbar") as HTMLElement;

	toolbar.append(GenerateToolbarButton(rawPen, "Pen", { isDefault: true }));
	toolbar.append(GenerateToolbarButton(rawSquare, "Square"));
	toolbar.append(GenerateToolbarButton(rawCircle, "Circle"));
};

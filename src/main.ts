import "./style.css";

import { createToolbar } from "./toolbar";
import { Canvas } from "./canvas";

createToolbar();
const ctx = Canvas();

console.log(ctx);
import { SpriteListModel, SpriteModel } from "./Models";

import rawTest from "@/sprites/test.json";
import rawTestImage from "@/sprites/test.png";

const test = new SpriteListModel(rawTest.meta, new Map<string, SpriteModel>(Object.entries(rawTest.frames)));

export default [test];

import { Sprite } from "./Sprite";
import { SpriteSet } from "./SpriteSet";

export class SpriteLoader {
  private sets: SpriteSet[];

  private floors: Map<number, Sprite>;
  private blocks: Map<number, Sprite>;
  private entities: Map<number, Sprite>;

  constructor(spriteSets: SpriteSet[]) {
    this.sets = spriteSets;

    this.floors = new Map<number, Sprite>();
    this.blocks = new Map<number, Sprite>();
    this.entities = new Map<number, Sprite>();
  }

  load() {
    this.sets.forEach(set => {
      if (set.source == "client")
        this.loadFromClient(set.path);
    });
  }

  private loadFromClient(path: string) {
    
  }

  getFloor(id: number) {
    return this.floors.get(id);
  }
}

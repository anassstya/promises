import read from "./reader.js";
import json from "./parser.js";

export class GameSavingLoader {
  async load() {
    try {
      const response = await read();
      const saving = await json(response);
      return saving;  
    } catch (error) {
      throw new Error('oops');
    }
  }
}

const result = new GameSavingLoader();
result.load().then(saving => {
  console.log(saving);
}, (error => {
  console.error(error);
}));


class ModeRegistry {
  constructor() {
    this.registry = {};
  }

  register(mode, renderFunction) {
    this.registry[mode] = renderFunction;
  }

  getRenderFunction(mode) {
    return this.registry[mode];
  }
}

const modeRegistry = new ModeRegistry();
export default modeRegistry;

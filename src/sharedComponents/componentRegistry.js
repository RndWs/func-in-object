
import Laptop from "../components/Laptop/Laptop";
import Smartphone from "../components/Smartphone/Smartphone";
import Tablet from "../components/Tablet/Tablet";

class ComponentRegistry {
  constructor() {
    this.registry = {};
  }

  register(type, component) {
    this.registry[type] = component;
  }

  getComponent(type) {
    return this.registry[type];
  }
}

const componentRegistry = new ComponentRegistry();
componentRegistry.register("laptop", Laptop);
componentRegistry.register("smartphone", Smartphone);
componentRegistry.register("tablet", Tablet);
export default componentRegistry;

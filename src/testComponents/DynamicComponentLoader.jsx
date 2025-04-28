
import React, { useState, useEffect } from 'react';

// Dynamically import all components from the 'components' folder
const components = import.meta.glob('../components/Laptop/components/*.jsx');


const DynamicComponentLoader = ( { item, mode } ) => {
  const [loadedComponents, setLoadedComponents] = useState([]);


  useEffect(() => {
    const loadComponents = async () => {
      const promises = Object.entries(components).map(async ([path, importComponent]) => {
        const { default: Component } = await importComponent();
        // const p = path.slice(path.lastIndexOf("/")+1).toLowerCase();
        // console.log(`path: ${p}`)
        return { path, Component };
      });

      const resolvedComponents = await Promise.all(promises);
      setLoadedComponents(resolvedComponents);
    };

    loadComponents();
  }, []);

  useEffect(() => {
    console.log(`loadedComponents: ${JSON.stringify(loadedComponents)}`);

    const C = loadedComponents.filter(({ path, Component }) => {
      console.log(path);
      console.log(
        path
          .slice(path.lastIndexOf("/") + 1, path.lastIndexOf("."))
          .toLowerCase()
      );
      path
        .slice(path.lastIndexOf("/") + 1, path.lastIndexOf("."))
        .toLowerCase() === mode && Component;
    });
    console.log(`C: ${C}`);
  }, [loadedComponents, mode]);

  return (
    <div>
      {/* {loadedComponents.map(({ path, Component }) => {
        return (
          (path
            .slice(path.lastIndexOf("/") + 1, path.lastIndexOf("."))
            .toLowerCase() === mode) && <Component item={item} mode={mode} />
        );
      })} */}
      {/* <C item={item} mode={mode}/> */}
    </div>
  );
};

export default DynamicComponentLoader;
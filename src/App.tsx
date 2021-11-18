import Glue from "@glue42/desktop";
import { GlueInitSettings, useGlueInit } from "@glue42/react-hooks";
import { Glue42} from "@glue42/desktop";
import {Glue42Web} from "@glue42/web"
import Workspaces from '@glue42/workspaces-api'

declare global {
  interface Window {
    glue: Glue42.Glue | Glue42Web.API;
  }
}

const App = () => {
  // Example custom configuration for the Glue42 Enterprise library.
  const settings : GlueInitSettings = {
      desktop: {
          config: { 
            appManager : "full",
            layouts: "full",
            displays: true,
            
            // libraries: [Workspaces],
          },
          factory: Glue,
      }
  };
  window.glue = useGlueInit(settings);

  return <div />;
};

export default App;

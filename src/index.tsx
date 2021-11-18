import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Glue from "@glue42/desktop";
import { GlueContext, GlueProvider } from "@glue42/react-hooks";

ReactDOM.render(
  // Wrap your root component in the `<GlueProvider />` in order
  // to be able to access the Glue42 Enterprise APIs from all child components.
      <App />,
  document.getElementById("root")
);
import React, { useEffect } from "react";

import winston, { createLogger, transports } from 'winston'
import BrowserConsole from 'winston-transport-browserconsole';


winston.configure({
  transports: [
      new BrowserConsole(
          {
              format: winston.format.simple(),
              
          },
      ),
      // Uncomment to compare with default Console transport
      // new winston.transports.Console({
      //     format: winston.format.simple(),
      //     level,
      // }),
  ],
});

export default logger

export const App = () => {

  useEffect(()=> {
    logger.info('App started')
  })

  return <div>hello</div>;
};

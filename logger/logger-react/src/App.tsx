import React, { useEffect } from "react";
import pino from 'pino'

// const  logger =pino({
//   browser: {
//     asObject: true
//   }
// })

import * as winston from "winston";
import BrowserConsole from 'winston-transport-browserconsole';
 
const level = "debug";
winston.configure({
    transports: [
        new BrowserConsole(
            {
                format: winston.format.simple(),
                level,
            },
        ),
        // Uncomment to compare with default Console transport
        // new winston.transports.Console({
        //     format: winston.format.simple(),
        //     level,
        // }),
    ],
});

export const App = () => {

  useEffect(()=> {
    winston.info('App started')
  })

  return <div>hello</div>;
};

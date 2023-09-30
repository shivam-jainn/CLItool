#!/usr/bin/env node

import arg from 'arg';
import chalk from 'chalk';
import path from 'path';
import {pkgUp} from 'pkg-up'

try {
  const args = arg({
    '--mern': Boolean,
    '--nextjs': Boolean,
  });

  if (args['--mern']) {
    const pkgPath = pkgUp.sync({cwd: process.cwd()});
    const pkg = require(pkgPath);
    if (pkg.tool) {
        console.log('Found configuration', pkg.tool);
        // TODO: do something with configuration
      } else {
        console.log(chalk.yellow('Could not find configuration, using default'));
        // TODO: get default configuration
      }
    console.log(chalk.green('Building your MERN app'));
  }     
} catch (e) {
  console.log(chalk.redBright(e.message));
  console.log();
  usage();
}

function usage() {
  console.log(`tool [CMD]
  ${chalk.greenBright('--mern\tBuilds a MERN app')}
  ${chalk.greenBright('--nextjs\tBuilds a next js app')}
  `)
}
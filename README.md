Build a Molecule
================

"Build a Molecule" is an educational simulation in HTML5, by <a href="http://phet.colorado.edu/" target="_blank">PhET Interactive Simulations</a>
at the University of Colorado Boulder.

*This simulation is under development and has not been published.*

### Documentation
The <a href="http://bit.ly/phet-html5-development-overview" target="_blank">PhET Development Overview</a> is the most complete guide to PhET Simulation
Development. This guide includes how to obtain simulation code and its dependencies, notes about architecture & design, how to test and build
the sims, as well as other important information.

### License
See the <a href="https://github.com/phetsims/build-a-molecule/blob/master/LICENSE" target="_blank">LICENSE</a>

### Updates

- Collection bug fixed. Now you can always complete a collection and move to the next one.

- BH3 and H2 space filling model bug fixed, now they are displayed well

### Building

First, you need to get the Grunt CLI, see how to do it <a href="https://gruntjs.com/using-the-cli" target="_blank">here</a>

Then, assuming that the Grunt CLI has been installed and that the project has already been configured with a package.json and a Gruntfile, it's very easy to start working with Grunt:

- Change to the project's root directory.
- Install project dependencies with npm install.
- Run Grunt with grunt.

That's really all there is to it. Installed Grunt tasks can be listed by running grunt --help but it's usually a good idea to start with the project's documentation.

Finally, in this case, go to the build folder and open the file "build-a-molecule_en.html" to use the app

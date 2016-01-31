![mHealth](http://www.xcubelabs.com/blogs/wp-content/uploads/mhealth-03.png)

# Privacy Index mHealth Apps
UI for paper "A Privacy Index for mHealth Apps". Easily compare privacy risks between apps

### Building Blocks

* Transpose HTML Table http://jsfiddle.net/XKnKL/3/

## Install

In home directory of project:

```
npm install
bower install
````

## Develop

Compile and watch changes in files with

```
gulp
```

from home directory. Simultaneously open another shell and serve the Nodejs express application with

```
npm run watch
```

## Calculate

In order to calculate the privacy index for every app in our dataset, open a shell in the application root directory.
Open the node shell

```
node
```

and use the ratings() command of the privacyidx module to generate the CSV file.

```
require("./privacyidx").ratings(true);
```

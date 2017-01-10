![mHealth](http://www.xcubelabs.com/blogs/wp-content/uploads/mhealth-03.png)

# Privacy Index mHealth Apps
UI for paper ["A Privacy Index for mHealth Apps"](http://link.springer.com/chapter/10.1007/978-3-319-44760-5_12). Easily compare privacy risks between apps.

Recommended citation:

```bibtex
@Inbook{Brüggemann2016,
  author=Brüggemann, Thomas
  and Hansen, Joel
  and Dehling, Tobias
  and Sunyaev, Ali",
  editor="Schiffner, Stefan
  and Serna, Jetzabel
  and Ikonomou, Demosthenes
  and Rannenberg, Kai",
  title="An Information Privacy Risk Index for mHealth Apps",
  bookTitle="Privacy Technologies and Policy: 4th Annual Privacy Forum, APF 2016, Frankfurt/Main, Germany, September 7-8, 2016, Proceedings ",
  year="2016",
  publisher="Springer International Publishing",
  address="Cham",
  pages="190--201",
  isbn="978-3-319-44760-5",
  doi="10.1007/978-3-319-44760-5_12",
  url="http://dx.doi.org/10.1007/978-3-319-44760-5_12"
}
```

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

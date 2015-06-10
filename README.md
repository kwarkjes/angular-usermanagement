# Polder Knowledge Boilerplate

Polderknowledge Boilderplate is frontend template for building **awesome** projects.

## Quick start

- Download the latest stable release from confluence.
- run `npm install` to install the npm modules like: Grunt, grunt-sass, grunt-cssmin etc.
- run `grunt --help` and see the available tasks you can run!
- Add some php, scss, js code.
- You are done :)

## File tree


    |____.bowerrc
    |____.gitignore
    |____.jscsrc
    |____.jshintignore
    |____.jshintrc
    |____bower.json
    |____Gruntfile.js
    |____package.json
    |____assets
    | |____js
    | | |____main.js
    | |____scss
    | | |____style.scss
    | | |_____fonts.scss
    | | |_____settings.scss
    | | |____components
    | | | |_____menu.scss
    | | |____layout
    | | | |_____footer.scss
    | | | |_____header.scss
    | | | |_____wrapper.scss
    | | |____pages
    | | |____typography
    | | | |_____headings.scss
    | | | |_____lists.scss
    | | | |_____paragraphs.scss
    | | | |_____tables.scss
    |____public
    | |____css
    | |____images
    | |____js
    | |____vendor (ignored)
    |____README.md


| File/Folder                           | Description |
|---------------------------------------|-------------|
| `.bowerrc`                            | Bower config file, primary task is telling bower to install the dependencies in `public/vendor` |
| `.gitignore`                          | [the global .gitignore file](https://help.github.com/articles/ignoring-files/#create-a-global-gitignore) |
| `.jscsrc`                             | JavaScript Code Style checker [config file](http://jscs.info/overview.html) |
| `.jshintignore`                       | JSHint ignore file (add paths to be ignored from hinting like this: [exmpale](https://github.com/jshint/node-jshint/blob/master/.jshintignore)) |
| `.jshintrc`                           | JSHint config file |
| `bower.json`                          | The Bower.json file |
| `Gruntfile.js`                        | *Compact* Gruntfile (this one imports the [Flexible-Gruntfile](http://developers.polderknowledge.nl/gitlab/polderknowledge/flexible-gruntfile)) |
| `package.json`                        | NPM [package.json](https://docs.npmjs.com/files/package.json) file (where all the npm dependecies are defined) |
| `assets`                              | The assets folder where the assets belongs (JS/CSS) |
| `assets/js`                           | The javascript folder where JavaScript belongs (NOTE: foldername must be:js. Not scripts or javascript) |
| `assets/js/main.js`                   | The main javascript file |
| `assets/scss`                         | The SCSS folder (NOTE: It's scss not sass!) |
| `assets/scss/_fonts.scss`             | The scss file where alle the font styling belongs like: Google Fonts import & Font-Face fonts |
| `assets/scss/style.scss`              | This is the main scss file of the project. This file contains **only imports** to other files. No styling goes here! |
| `assets/scss/_settings.scss`          | The scss file where alle the projects variables belongs |
| `assets/scss/components`              | The folder where all the components belongs like: Menu, Sitemap, Tabs, Progress-bar... |
| `assets/scss/components/_menu.scss`   | The scss file where the menu styling belongs |
| `assets/scss/layout`                  | The folder where the layout styling belongs like: Wrapper, Footer, Header, Content-area, Sidebar |
| `assets/scss/layout/_footer.scss`     | Contains the styling of the footer |
| `assets/scss/layout/_header.scss`     | Contains the styling of the header (NOTE: This file contains only de layout styling of ther header not the header elements like the navbar (navbar could be a component) or the Searchform in the header) |
| `assets/scss/layout/_wrapper.scss`    | Contains the styling of site wrapper |
| `assets/scss/pages`                   | This folder must contain the styling of special pages like: Contact, FAQ, Searchresults, Download... |
| `assets/scss/typography`              | This folder must contain the styling of the typography like the headings, lists, paragraphs, quotes... |
| `public`                              | This must be the public folder where all de generated CSS & Js belongs |

------------

### Which files are required?

All these files are required in every project! Let's say you don't really need `scss/layout/footer.scss` that fine! just leave the file there (it's empty by default).

------------

### What about custom/other files?

Feel free to create you own SCSS/JS files as long as you keep the strucure clean & clear.

#### Example 1:

**Q**: I have some fancy icons from [icomoon](https://icomoon.io/app) where can I put that?

**A**: As you can see we have our fonts in `assets/scss/fonts.scss` that means that you are allowed to put your `icons.scss` at the same level like this: `assets/scss/icons.scss`.


#### Example 2:

**Q**: What about styling a form?

**A**: Form seems to be a component so you could put styling in `assets/scss/components/_forms`. But if we are talking about styling a specifc form like a contact-form in a contact page, then you should put the general styling in `components` and specific styling (like: margin, padding, width, height etc.) in `assets/scss/pages/contact`.

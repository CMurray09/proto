# Proto

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

This project displays video thumbnails from the watchcorridor API. This project also includes a login page and an ID page when clicking on thumbnails.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Notes on interview test

I wanted to explain what I did not include and what I could have improved if I had spent more time.

I could have made the header/navigation its own component. I would also make it so the correct options appear (such as home or login) depending on which page you are on. Currently only the login button appears in the header for the homepage.

I noticed one of the videos did not have any images. I had two options, to either exclude the video or to add a default thumbnail. I decided to add default thumbnails for both the thumbnail and packshot types and use them when the image property is not present.

I did not have enough time to add the optional sorting.

I did not have enough time to use the packshots for mobile sized screens. I did test using the packshots instead of thumbnails and they display correctly, however, the images do not switch out depending on the screen size.

The login page could show a success toast message when 'logging in' but I decided not to spend time on this as it may have also been out of scope.

Lastly, I left a TODO comment for fixing the 'any' type when setting the video variable (sets the variable with API data)

There may possibly be other improvements but these are the ones that stood out to me.



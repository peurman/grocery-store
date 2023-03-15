# GROCERY STORE & Testing

![coverage](/coverage.png)

(created on February 2023)

## Angular Trainee Program - week 10

This `Angular app` **shows products of different categories**. You can select a product, or filter products by category.

The app is using `ngRx` (the library for Angular applications that is based on the popular Redux library) for states management.

You can **login** and keep the session open for the next time (data persists on **local storage**).

### Testing

The app also includes **unit tests** made with `Karma` and `Jasmine`.

You can run the tests with the command **_ng test_** and also get the overall coverage running **_ng test --code-coverage_**, and then opening the **index.html** file in the **coverage/week10 folder**.

### Next Steps

Soon you'll be able to **add a product to your Cart**, and also to **like or unlike any of the products**.

Soon you'll be able to **edit or delete items form your cart, and also clear the hole cart**.

---

## Using this app

First of all, you have to run the command `npm install` or `npm i` to install all the dependencies listed in the package.json file.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

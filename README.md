# [Sainsbury's code challenge](https://jsainsburyplc.github.io/front-end-test/)

This is a single-page application consisting of two views the navbar and the
products view.

- The navbar contains a single basket button which is responsible for showing
  the user's active basket based on the products the user adds.
- The products view contains a bunch of products fetched from the provided
  end-point and shows all the product details and a button to add them to the
  basket.

> **Note:** For the sake of time, there is no quantity base for the products,
> and users can only add them once to the basket.

---

**Tests:** I liked to write tests for each component and its functionality, but
there was not much time to do so!

## Run app locally

- Install all the dependencies by using on of the following commands:

  Yarn:

  ```bash
  yarn
  ```

  or

  ```bash
  yarn install
  ```

  NPM:

  ```bash
  npm i
  ```

  or

  ```bash
  npm install
  ```

- Now you can run it locally with on of the following commands:\
  Yarn:

  ```bash
  yarn start
  ```

  NPM:

  ```bash
  npm run start
  ```

  **NOTE:** There are two other useful commands:

  - Formatting with Prettier

    Yarn:

    ```bash
    yarn format
    ```

    NPM:

    ```bash
    npm run format
    ```

  - Linting with ESlint

    Yarn:

    ```bash
    yarn lint
    ```

    NPM:

    ```bash
    npm run lint
    ```

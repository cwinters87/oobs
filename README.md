## 🚀 Quick start

1.  **Make sure to have Node.js installed (v18 or newer)**

    ```shell
    node --version
    ```

    [Node.js installation guide](https://www.gatsbyjs.com/docs/tutorial/part-0/#nodejs)

2.  **Make Sure you have GIT install on your system.**

    ```shell
    git --version
    ```

    [GIT installation guide](https://www.atlassian.com/git/tutorials/install-git#windows)

3.  **Install Gatsby CLI on your device (v5 or newer).**

    ```shell
    npm install -g gatsby-cli
    ```

    Check version.

    ```shell
    gatsby --version
    ```

4.  **Install the dependencies.**

    Navigate into the website directory and install dependencies.

    ```shell
    cd tasksuite-website/
    npm install
    ```

5. **Create branch from dev**

    ```shell
    git checkout dev
    git checkout -b <branch-name>
    ```

    name branch as follows: <dev-feature-name> or <dev-bugfix-name>

6.  **Start developing.**

    Start it up.

    ```shell
    gatsby develop
    ```

7.  **Open the code and start developing!**

    Your site is now running at http://localhost:8000

8. **If a new page, add <Layout/> component and style**

    Import Layout from './src/components/layout/layout.js'

    You should also wrap your component with padding of 7% on the sides and 100% viewport height

    Add a media query for ultra-wide support as follows:

    ```
    @media only screen and (min-width: 2561px)  {
    .container {
        max-width: 2560px;
        padding: 26px 180px;
        }
    }
    ```

    Place all components and elements inside the <Layout/>

9. **Use global.css variables for color and fonts**

    Refer to global.css in the syles folder for variable names. Fonts should mainly follow this order:

    Titles and headers: var(--font-regular)

    all other text: var(--font-light)

    If needed, add a font-weight of 600 if needing bold.

10. **Use <componentName>.module.css file for the styling of component.**

    Place CSS Module files in the same folder as the js component. 




#### Learn More

[Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

[Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

[Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

[API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

[Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

[Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

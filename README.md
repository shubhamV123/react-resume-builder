# React resume builder

A simple react based web app for which you can use to generate a resume. All configs are dynamic so need to worry you can simply update config and download your resume. That's it.

<img src="./resume-builder.gif" width="100%"/>

### How it works?

1. Simply you need to update json value that's it.
2. I would suggest to get basic overview of **html, json** for playing with this tool. You can directly pass html tag in it. For better resume modification.
3. **Make sure** set print option `A4` and `uncheck print header and footer` option

#### How to use locally

- You need to download this project locally. Then install dependencies using `yarn install` or `npm install`
- Runs the app in the development mode.
  Open http://localhost:8080 to view it in the browser.

- Update you `resume-details-dev.json` config according to your requirement

- If you found there is not required field according to your requirement. You can simply add your config in `resume-details-dev.json`. The only **catch** here is you need to to defined in your json this format:

  ```json
  {
    "objectKey": {
      "title": "Your title",
      "description": ["list of dependency you want to show"]
    }
  }
  ```

- Once you have done this to your json file. You can simply use list based ui by going through `Resume.js` and add

  ```jsx
    <DescriptionList dataKey={your key} />
  ```

- If you want to add section like `profession experience` then use same data format as it is used in `.json` file. For more `Reference` check out how `ProfessionExperience` component is work

- There are two type of generic components currently `Section`(professional experience like) and `DescriptionList` (certificationa and award like). Choose based on the requirement. _Currently you have to add manually add in `Resume.js` for your requirement field. I have plan in future to handle this dynamically_

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### TODO

- [ ] Add another version template
- [x] Create website based config so that user can directly play with tools
- [ ] Added proptypes or flow/ts
- [x] Add pdf button to download resume directly
- [ ] Improve readme doc
- [ ] Current code is raw one. Refactor it
- [ ] Add workflow to auto approve dependabot request

### REFERENCE:

1. [How I structure my css](https://matthiasott.com/notes/how-i-structure-my-css)
2. Tailwing [config](https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js)


## Contributors


<div>
    <a href="https://github.com/shubhamV123"><img src="https://avatars.githubusercontent.com/u/29898106?v=4" title="shubhamV123" width="80" height="80"></a>
    <a href="https://github.com/Jovany1543"><img src="https://avatars.githubusercontent.com/u/79227932?s=52&v=4" title="Jovany1543" width="80" height="80"></a>


<div>
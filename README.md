# React resume builder

A simple react based web app for which you can use to generate a resume. All configs are dynamic so need to worry you can simply update config and download your resume. That's it.

> ✨ Bootstrapped with Create Snowpack App (CSA). Learn more about snowpack [here](https://www.snowpack.dev/)

### How it works?

- You need to download this project locally. Then install dependencies using `yarn install` or `npm install`
- Update you `resume-details-dev.json` config according to your requirement
- Currently you can download a pdf only using devtoop. `Click on print by doing right click`. Will add support soon to download via button

### How to use?

- If you found there is not required field according to your requirement. You can simply add your config in `resume-details-dev.json`. The only **catch** here is you need to to defined in your json this format:

```
"objectKey":{
    "title":"Your title",
    "description":["list of dependency you want to show"]
}

```

Once you have done this to your json file. You can simply use list based ui by going through `Resume.js` and add

```
DescriptionList dataKey={your key} />

```

- If you want to add section like `profession experience` then use same data format as it is used in `.json` file. For more `Reference` check out how `ProfessionExperience` component is work

- There are two type of generic components currently `Section`(professional experience like) and `DescriptionList` (certificationa and award like). Choose based on the requirement

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### TODO

- [] Add another version template
- [] Create website so user directly can play with configs
- [] Added proptypes or flow/ts
- [] Add pdf button to download resume directly
- [] Improve readme doc

### REFERENCE:

1. [How I structure my css](https://matthiasott.com/notes/how-i-structure-my-css)
2. Tailwing [config](https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js)

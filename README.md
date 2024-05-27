# start lead 
### page navigation

1. created two functional components in inside components folder
2. installed react router DOM for navigation between pages
3. Routes and Route configured in App.js with path and elements


### landing page

1.default page is AllLead.js it's having all leads data in table format.
2.Edit and Delete option also available for user
3.All Leads data getting from localstorage if no data in local storage fallback text will show e.g: No Data.
4.local storage stores data in string format. to access data from localstorage the data convert in to javascript Object by using of JSON.parse()

### add lead
1.On Click add lead button it will navigate to another component.
2.that component having 3 inputs and one select option.
3.add a state variable with intial value as keys of object with empty strings and status as 0.
4.Onchange of each field changeHandler function will call.
5.Inside that function destruct value,name from e.target.
6.Use setdata for set new value to defined state object with using of name and value. it will set value as per name field.
7.save Button having onClick event handler eg:submitHandler.
8.Get previous lead data from local storage and conver JSON.parse() and store in a variable. if no data in local assign empty array.

9.Each input field have own validation for eg:email must be email format, phone number must have 10 numbers and status must select one option out of three options.
10.All conditions are satisfied it will go to next step.
11.In the next step find it is create lead or edit lead page with useLocation method.
12.if it is create lead page append state variable data into existeddata of local with using of push method.
13.after append data into existeddata array convert hole data in JSON.stringify().
14.after convert setitem(key,convertedData).
15.if Data added succesfully we get toast with success message.
16.and navigate to main table component.

### edit lead
1.Table having all leads data with edit and delete option.
2.Each row in table it's have index number onclick on edit button we are passing state.
3.In state we passing selected object and index.
4.after navigate another page state data destructed with uselocation().
5.When edit page rendered first time set state object in useState with using UseEffect()
6.Now editable data in our usestate so we can access data and show data in input fields with use of input value method.
7.To edit each field onChange method we can use, inside onchange pass a function it can access value and name. with state variable we can assign data to each field in state object.
8.To update all values in localstorage  define a submit function.
9.submit function having validations for each field. all validations are done it will go to next step.
10.In the next step get all leads data from localstorage and convert in a variable as JSONobject. variable name eg:dataArray.
11.Put a condition  state passed or not from edit button from table.
12.if state having data we can use index
13.Pass that index in  dataArray and assign updated state eg:dataArray[index]=data.
14.After data injected in dataArray convert in JSON.strigify() and setItem(keyword, convertedData)
15.Will get a toast message as updated successfully. and navigated to main table with updated data of particular row.

### delete lead
1.on click of delete it access delete function.
2.in that deletefunction passing index of row as function parameter.
3.Get all lead data from local storage and conver JSON.parse() and store in a variable. 
4.with splice method we can pass index and 1 as second value.
5.it will remove that object from array and return rest element.
6.After data removed from dataArray convert in JSON.strigify() and setItem(keyword, convertedData).
 

### search lead with name , email
1.add a state variable as serchText when the value updates hit a function with using useEffect method.
2.in that function use filter method to filter name and email. filter provide 3 parameters. use corrent value and convert into lowerCase.
3.searchText also convert into lowercase and add include method between both. store in a variable and return that 2 variables.
4.filter returns an array with possible elements and assign that filteredArray to a state variable.
5.map that state variable will get filtered values in table.


### filter lead with status
1.create select option with possible values.
2.on select of any field hit a function with value
3.if select value equal to 0 it will not retur any data. when value greaterthan 0 it will work.
4.add filter method and return which element have status qual to provided value.
5.append filterd array into same filterdState variable.
6.when user select any option it will give filtered data in the table.

##### achievments
1.created one form component and used for add lead data and update lead data.
2.created one input component and used for where inputs are needed.
3.passed data throw props and navigation state.
4.it will reduce code , more flexibility and reusable.



# end lead 
























# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

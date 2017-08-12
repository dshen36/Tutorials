Component

	in the html:
	//<div id="app"></div>

	- render(): returns a piece of html that is rendered onto the dom. the logic that is put onto here is 
				going to be some chunk of html
			  - you can only return one object, so wrap things in a div tag
			  - if i wanted to style the component, i cant just call style="color:red", because this is not 
			  	   going to work since this is jsx so it is expecting an object with different properties on it
			  	 - Fix this by passing in an object of css styling: style = { {background: "red"}} //yes, two seperate brackets
			  - '-' or dashes, are not allowed in javascript, so something like background-color: "red" is not going to work out.
			    So a way to fix it would be to use CAMELCASE within the styling tool and it will fix it
			  - IN ORDER TO CALL CSS CLASSES, you would have to say 'className = "customMadeClass"'
			  		- this is because the keyword 'class' is a reserved keyword and is used to make classes within react

	In order to actually put it onto the dom, you use the second of the two imported libraries, ReactDOM, 
	and call render.
		- EX) ReactDOM.render(<ComponentName />, document.getElementById("app"));
			- first parameter is the component that you are creating with the React render
			- second parameter is the location of where you want to display it.


Props
	- short for properties
	- we create our own components, and make it unique with the types of properties 

This
	- this references where you are and where you are located. if you are within a component, then it will show the component object

{}
	- allows you to inject javascript within html. It can be done in a component that is written in jsx
	- pretty trippy inception concepts.

States
	- whenever the state changes, the dom is rerendered
	- starts by creating a constructor
	- constructor(props) {//always have to pass in props
		super(props);

		this.state = {
			color = "hotpink"
		};
	}
	//can be referenced by this.state.insertStateNameHere

	- can change state by calling setState
	toggleColor() {
		this.setState({
			color: "yellow"
		});
	}

	- in order to add this function to a button or something, you need to bind 'this' or the current object to the method, otherwise is undefined
	'onClick= {this.toggleColor.bind(this)}''


//two way databinding
	changeColor(event) {
		this.setState({
			color: event.target.value;
		});
	}
	<input value={this.state.color} onChange={this.changeColor.bind(this)} /> ///in order to get this value from the input, we have to call event.target.value

Looping through the array:
	- const colorArray = [...];

	componentDidMount() {//when this is ran, it is ran before the component is created and bound to the html
		let colorPos = 0;
		setInterval(() => {
			if(colorArray.length - 1 > colorPos) {
				this.setState({
					color: colorArr[colorPos]
				});
				colorPos++
			} else {
				this.setState({
					color:colorArray[colorPos]
				});
				colorPos= 0
			}
		});
	}

	componentWillMount() {
		//unlike componentDidMount, this will happen after the component is created and bound to the html
	}
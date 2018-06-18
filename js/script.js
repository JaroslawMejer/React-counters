var Counter = React.createClass({
	getDefaultProps: function(){
		return console.log('Ustawienie domyślnych propsów')
	},
	getInitialState: function(){
		return {
			counter: 0
		}
	},
	increment: function () {
		this.setState({
			counter: this.state.counter + 1
		})
		console.log('Nowa wartość counter: ' + (this.state.counter + 1))
	},
	decrement: function () {
		this.setState({
			counter: this.state.counter - 1
		})
		console.log('Nowa wartość counter: ' + (this.state.counter - 1))
	},
	componentWillMount: function() {
		return console.log('Informacja nt. ładowania komponentów')
	},
	render: function(){
		return React.createElement('div', {className: 'container'},
			React.createElement('span', {}, 'Licznik: ' +this.state.counter),
			React.createElement('div', {className: 'buttonContainer'},
				React.createElement('button',{onClick: this.increment}, '+'),
				React.createElement('button',{onClick: this.decrement}, '-')
			)
		)
	},
	componentDidMount: function(){
		return console.log('Sprawdzenie wstępnych ustawień, np. counter = ' + this.state.counter)
	},
	shouldComponentUpdate: function() {
		console.log('Pozwalamy na przerysowanie, w przypadku false counter by nie działał')
		return true 
	},
	componentDidUpdate: function() {
		return console.log('Wartość counter po przerysowaniu: ' + this.state.counter)
	}
})

var element = React.createElement(Counter)
ReactDOM.render(element, document.getElementById('counter1'))
ReactDOM.render(element, document.getElementById('counter2'))
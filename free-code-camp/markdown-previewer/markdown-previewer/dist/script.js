class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: initialPreview };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      preview: e.target.value });

  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { class: "header" }, "Welcome to my Markdown Previewer"),
      React.createElement("div", { class: "header2" }, "Created by Derpnoch"),
      React.createElement("div", { className: "container" },
      React.createElement("div", { className: "left" },
      React.createElement(Toolbar, { text: "Editor" }),
      React.createElement("textarea", { id: "editor", value: this.state.preview, onChange: this.handleChange })),

      React.createElement("div", { className: "right" },
      React.createElement(Toolbar, { text: "Previewer" }),
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.preview) } })))));




  }}


const Toolbar = props => {
  return (
    React.createElement("div", { className: "toolbar" },
    React.createElement("i", { title: "icon", className: "fa fa-wrench" }),
    props.text));


};

var renderer = new marked.Renderer();

renderer.link = function (href, title, text) {
  return `<a href=${href} target="_blank">${text}</a>`;
};

marked.setOptions({
  renderer,

  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
  breaks: true });


const initialPreview = `
# Hello, Welcome to my Markdown Previewer!
## This right here, is the sub-heading...
### If you scroll below, you'll see some interesting stuff:

### List of things to do!

1. Eat
2. Sleep
3. Code
4. Repeat

### Random Links

[Click me!](http://learn.freecodecamp.org)

[Or me!](http://www.google.com "Our bread and butter for coding")

### Text Decorations

For starters you look at this *italic* text OR

WHOA a **bold** text!!!

OR why not both ***bold and italic***.....looks pretty epic!

### Image

![alt text](https://miro.medium.com/max/1260/1*eDaRLwBlwmjCpkeeqRM4vw.png "Freecodecamp")

### Blockquote!

> Welcome Camper!

### Code

Heres an important tag for HTML, \`<div>(Insert Stuff)</div>\` its very important!!!

\`\`\`
//Heres a simple code block

function multiplyTwoNumbers(a,b) {
  return a * b;
}

// Some random code

const words = "Hello World!";
console.log(words);

//output
Hello World!
\`\`\`

`;

ReactDOM.render(React.createElement(App, null), document.getElementById('main'));
{ 
    <div id="outer-div">
<h1 id="inner-div"></h1>
    <h1 id="heading"></h1>
<h2 id="sub-heading"></h2>
<h3 id="third-heading"></h3>
</div>
const heading = React.createElement("div", { id: "outer-div" },
    React.createElement("div", { id: "inner-div" },
        React.createElement("h1", { id: "heading1" }, "Hello! React Learners"),
        React.createElement("h1", { id: "heading2" }, "Hello! React Learners"),
        React.createElement("h1", { id: "heading3" }, "Hello! React Learners"),
        React.createElement("h1", { id: "heading4" }, "Hello! React Learners")
    )
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
} ;
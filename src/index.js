import React from "react";
import ReactDOM  from "react-dom/client";

const divRoot = document.getElementById('root');
const root = ReactDOM.createRoot(divRoot);

const Greeting = () => {
     return <h2>My First </h2>;
};

root.render(<Greeting/>)

// export default Greeting;
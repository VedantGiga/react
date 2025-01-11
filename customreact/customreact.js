function customRender(reactElement, container) {
    // const DOMelement = document.createElement(reactElement.type)
    // DOMelement.innerHTML = reactElement.children
    // DOMelement.setAttribute("href", reactElement.props.href)
    // DOMelement.setAttribute('target', reactElement.props.target)
    // container.appendChild(DOMelement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
        container.appendChild(domElement)
}
}
const reactElement = {
    type:"a" ,
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"click me to visit google"
}

const mainContainer = document.querySelector("#root")


customRender(reactElement, mainContainer)
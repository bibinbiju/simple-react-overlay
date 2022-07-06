# simple-react-overlay
An overlay popup menu for individual component

<!-- ![Demo React Overlay Menu](https://raw.githubusercontent.com/alvarobrito/react-overlay-menu/master/react-overlay-menu_demo.gif) -->

# install

``` bash 
yarn add react-overlay-menu | npm i react-overlay-menu
```

# usage

``` javascript
import styled from 'styled-components';
import ReactOverlay from './lib';
const SimpleMenu = () => {
  return (
    <DropUl >
      <DropLi >Car</DropLi>
      <DropLi >Bike</DropLi>
    </DropUl>
  )
}
function App() {
  return (
    <div >
      <ReactOverlay  overlay={<SimpleMenu/>} trigger={['click']}>
      <button>
        Click Menu
      </button>
      </ReactOverlay>
    </div>
  );
}

export default App;
const DropUl = styled.ul`
    background: #0B162A;
    border: 0.1rem solid #2B3952;
    border-radius: 0.9rem;
    padding:2.2rem 5.8rem 2.2rem 2.2rem;
    list-style:none;
    display:block;
`
const DropLi = styled.li`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: #FFFFFF;
    cursor:pointer;
    margin-bottom: 1.2rem;
    &:last-child {
        margin-bottom: 0;
    }
`
```

# options

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `overlay` | `React Node` |  | Menu component for display overlay menu items |
| `trigger` | `['click']` | ['click'] | Array of HTML events |
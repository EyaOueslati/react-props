import Component from './Profile/component';
import Photo from './photo.jpg';
import './App.css';



function App() {
  const NameAlert= (name) =>{
  
    alert (name);
   };
  return (
    
    <div className="App">
     <Component name="Eya Oueslati" profession= "Full-Stack JS Developer" bio="Hmtl, CSS, JS, React" click= {NameAlert} >{Photo}</Component>
    </div>
  );
}

export default App;

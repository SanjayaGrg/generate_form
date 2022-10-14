import React, { useEffect, useState } from 'react';
import './App.css';
import './CSS/form.css';
import formJSON from './json/FormComponent.json';
import Element from './components/Element';
import { FormContext } from './FormContext';


function App() {
  const [element, setElement] = useState(null);
  useEffect(() => {
    setElement(formJSON[0])
  }, [])

  const { fields, page_title } = element ?? {}

  const handleSubmit = (event) => {
    event.preventDefault(); // stop refreshing the page while submitting and pass it to console in json format
    console.log(element);
  }

  const handleChange = (field_id, event) => {
    const newElements = { ...element }
    newElements.fields.forEach(field => {
      const { type, id, value } = field
      if (field_id === id) {
        switch (type) {
          case 'checkbox':
            field['value'] = event.target.checked;
            break;

          default:
            field['value'] = event.target.value;
            break;
        }

      }
      setElement(newElements)
    });

    console.log("handle change : ", element)
  }

  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className='App'>
        <div className='App container container-form'>
          <h3 style={{ textAlign: "center", margin: "10px 10px", padding: '10px' }}>TASK</h3>
          <form className='form-body'>
            <h3 style={{ textAlign: "center", margin: "10px 10px", padding: '10px' }}>{page_title}</h3>
            {
              fields ? fields.map((field, i) => <Element key={i} field={field} />)
                : null
            }
            <button type='submit' className='btn btn-dark justify-content-md-end'
              style={{ textAlign: 'center', marginTop: '15px' }}
              onClick={(e) => handleSubmit(e)}>Submit</button>
          </form>

        </div>
      </div>
    </FormContext.Provider>

  )
}


export default App;

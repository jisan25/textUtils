import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter something');

    
 
    const changeHole = (e) =>{
        setText(e.target.value);
    }
    const clickKorle = () =>{
        setText(text.toUpperCase());
        props.showAlert('Text is uppercased', 'success');
    }
    const lowerCaseBana = () =>{
        if(text === ''){
          props.showAlert('Age kisu input kor', 'danger');
        }else{
          setText(text.toLowerCase());
          props.showAlert('Text is lowercased', 'success');
        }

    }
    const textClearKor = () => {
        let text = '';
        setText(text);
        props.showAlert('Text is cleared', 'success');

    }
    const dummyTextAddKor = () => {
        let text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque consequatur porro molestiae rem excepturi mollitia aliquam ut aut minima! Enim dolores, quisquam accusamus, facere sed harum dolor ab explicabo similique aspernatur vitae perferendis voluptatum, quibusdam pariatur nulla libero omnis? Autem quos, perferendis accusamus consectetur tempora delectus. Sint quisquam nemo nisi?';
        setText(text);
        props.showAlert('Dummy text has been added', 'success');

    }
    const textCopyKor = () => {
        // let copyText = text;
        // copyText.select();
        // copyText.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(text);
        console.warn('Copied');
        props.showAlert('Text is copied on clipboard', 'success');

        // alert("Copied the text: " + copyText);
    }
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert('Extra space has been removed', 'success');

    }

  return (
    <>
      <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">        
        <textarea className="form-control" value={text} onChange={changeHole} id="myBox" cols="30" rows="10" style={{color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#050A30' : 'white'}}></textarea>
        <button onClick={clickKorle} className="btn btn-primary my-3 mx-1">To UpperCase</button>
        <button onClick={lowerCaseBana} className="btn btn-primary my-3 mx-1">To LowerCase</button>
        <button onClick={textClearKor} className="btn btn-primary my-3 mx-1">Clear Text</button>
        <button onClick={dummyTextAddKor} className="btn btn-primary my-3 mx-1">Dummy Text</button>
        <button onClick={textCopyKor} className="btn btn-warning my-3 mx-1">Copy Text</button>
        <button onClick={handleExtraSpaces} className="btn btn-info my-3 mx-1">Remove Spaces</button>
      </div>
    </div>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} - Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter Something to preview'}</p>
    </div>
    </>
  
  )
}

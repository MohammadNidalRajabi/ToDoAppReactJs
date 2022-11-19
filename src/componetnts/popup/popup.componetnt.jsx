import './popup.css'
const Popup = (props) => {

    const clicked_True = () => {

        props.onSure();
        props.onPopup();;





    }

    const clicked_False = () => {

        props.onPopup();


    }

    return (
        <div className='pop'>

            <h3>are you sure delete</h3>
            <button onClick={clicked_True} id='true'>&#10003;</button>
            <button onClick={clicked_False} id='false'>&#10008;</button>

        </div>

    );
}
export default Popup;
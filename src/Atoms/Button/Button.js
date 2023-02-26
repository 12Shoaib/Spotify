import button from './button.module.css';

const Button = (props) => {
    return(
        <div className={button.main__Component}>
            <button onClick={props.onClick} className={button.button}>{props.name} </button>
        </div>
    )
}

export default Button
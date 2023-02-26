import input from './input.module.css'

const Input = (props) => {
    return(
        <div className={input.main__Component}>
            <input onChange={props.onChange} type={props.type} placeholder={props.placeholder} className={input.input__Field}  />
        </div>
    )
}

export default Input
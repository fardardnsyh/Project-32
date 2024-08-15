import { useAppContext } from '../context/appContext'

const Alert = () => {
    // values to be provided from global context. goodbye repetition!
    const { alertType, alertText } =  useAppContext()

    return (
        <div className={`alert alert-${alertType}`}>
            {alertText}
        </div>
    )
}

export default Alert

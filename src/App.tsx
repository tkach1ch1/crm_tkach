import { Provider } from 'react-redux'
import Routing from './features/Routing/Routing'
import { store } from './redux/store'

const App = () => {
    return (
        <Provider store={store}>
            <Routing />
        </Provider>
    )
}

export default App

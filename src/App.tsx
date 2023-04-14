import { Provider } from 'react-redux'
import Routing from './features/Routing/Routing'
import { AuthProvider } from './context/AuthContext'
import { store } from './redux/store'

const App = () => {
    return (
        <Provider store={store}>
            <AuthProvider>
                <Routing />
            </AuthProvider>
        </Provider>
    )
}

export default App

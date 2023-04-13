import { Provider } from 'react-redux'
import Routing from './features/Routing/Routing'
import { store } from './redux/store'
import { AuthProvider } from './context/AuthContext'

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

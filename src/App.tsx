import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import AppRouter from 'routes';

function App() {
    return (
        <div className='flex h-full flex-col md:flex-row'>
            <AppRouter/>

            <ToastContainer
                position='top-right'
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme='colored'
            />
        </div>
    );
}

export default App;
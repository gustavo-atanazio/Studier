import Toast from 'lib/react-toastify';
import Modal from 'lib/react-modal';
import AppRouter from 'routes';

function App() {
    return (
        <div className='flex h-full flex-col md:flex-row'>
            <AppRouter/>

            <Toast/>
            <Modal/>
        </div>
    );
}

export default App;
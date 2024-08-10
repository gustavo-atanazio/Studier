import Toast from 'lib/react-toastify';
import AppRouter from 'routes';

function App() {
  return (
    <div className='flex h-full flex-col md:flex-row'>
      <AppRouter/>

      <Toast/>
    </div>
  );
}

export default App;
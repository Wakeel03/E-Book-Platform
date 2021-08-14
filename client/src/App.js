import './App.css';
import LandingPage from './pages/LandingPage';
import StoriesPage from './pages/StoriesPage';
import StoryDetail from './pages/StoryDetail';

function App() {
  return (
    <div className="app font-Poppins">
     {/* <LandingPage /> */}
     {/* <StoriesPage /> */}
     <StoryDetail />
     {/* PopUp menu  */}
     <div className="absolute w-full h-full inset-0 bg-gray-900 opacity-20">
       
     </div>
     <div className="rounded-md absolute w-96 p-12 bg-white top-1/3 left-1/3  flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-8">Login to  Writer</h2>
        <div className="w-full py-2 btn-rounded-full text-center text-sm font-semibold bg-facebook-color text-white mb-4">Log In with Facebook</div>
        <div className="w-full py-2 btn-rounded-full text-center text-sm font-semibold text-black mb-4 border-black">Log In with Google</div>
        <p className="text-sm">Don't have an account? <span className="text-primary-red font-medium cursor-pointer">Sign up!</span></p>
      </div>
    </div>
  );
}

export default App;

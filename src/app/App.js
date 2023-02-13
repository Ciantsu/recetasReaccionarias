import BarritaAlta from './features/topbar/topbar';
import './App.css';
import RecipeList from './http/get';
import RecipeRemoval from './http/delete';
import RecipePutage from './http/put';
import RecipePostage from './http/post';

function App() {
  return (
    <div className="App">
      <BarritaAlta />
      {/* <BgColorExample /> */}
      <RecipeList />
      <RecipePostage />
      <RecipeRemoval />
      <RecipePutage />
    </div>
  );
}

export default App;

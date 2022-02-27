import logo from './logo.svg';
import './App.css';
import StateUse from './components/Hooks/stateUse';
import ReducerUse from './components/Hooks/reducerUse';
import EffectUse from './components/Hooks/effectUse';
import RefUse from './components/Hooks/refUse';
import LayoutEffectUse from './components/Hooks/layoutEffectUse';
import ImperativeHandleUse from './components/Hooks/imperativeHandleUse';
import ContextUse from './components/Hooks/contextUse';
import MemoUse from './components/Hooks/memoUse';
import CallBackUse from './components/Hooks/callbackUse';
import TestJs from './components/JS/TestJs';
import useFetch from './components/CustomHooks/useFetch';

function App() {
  const { data, loading, error, refetch } = useFetch('https://v2.jokeapi.dev/joke/Any');

  if(loading) return <h1>loading..</h1>

  if(error) console.log(error);

  return (
    <div className="App">
      {/* <StateUse /> */}
      {/* <ReducerUse /> */}
      {/* <EffectUse /> */}
      {/* <RefUse /> */}
      {/* <LayoutEffectUse /> */}
      {/* <ImperativeHandleUse /> */}
      {/* <ContextUse /> */}
      {/* <MemoUse /> */}
      {/* <CallBackUse /> */}
      {/* <TestJs /> */}

      <h1>{data?.setup}:{data?.delivery}</h1>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default App;

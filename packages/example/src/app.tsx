import ReactNumberUp from '@jswork/react-number-up/src/main';
import '@jswork/react-number-up/src/style.scss';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(2);
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">
        Build Time: {BUILD_TIME}
      </div>
      <nav className="x-2 fc">
        <button className="btn btn-sm btn-primary" onClick={() => setValue(value + 1)}>Add</button>
        <ReactNumberUp className="debug-red" value={value} />
        <button className="btn btn-sm btn-error" onClick={() => setValue(value - 1)}>Minus</button>
      </nav>
    </div>
  );
}

export default App;

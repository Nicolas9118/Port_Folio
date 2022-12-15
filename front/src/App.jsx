import Adresse from "./routes/routes"

/*  ----  Import de la librayry FontAwesome  ----  */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);


function App() {
  return (
      <>
        <Adresse />
      </>
  );
}

export default App;

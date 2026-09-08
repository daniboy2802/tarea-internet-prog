import { useState } from "react";
import CourseInfo from "./courseinfo/App";
import Phonebook from "./phonebook/App";

const App = () => {
  const [page, setPage] = useState("phonebook");

  return (
    <div className="fso">
      <nav>
        <button type="button" onClick={() => setPage("courseinfo")}>
          courseinfo
        </button>
        <button type="button" onClick={() => setPage("phonebook")}>
          phonebook
        </button>
      </nav>
      {page === "courseinfo" ? <CourseInfo /> : <Phonebook />}
    </div>
  );
};

export default App;

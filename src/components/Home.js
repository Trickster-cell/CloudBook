import AddNote from "./AddNote";
import Notes from "./Notes";

const Home = (props) => {
  // const context = useContext(noteContext);
  // const { notes, setNotes } = context;
  let { showAlert } = props;
  return (
    <div>
      <div className="container my-3">
        <Notes showAlert={showAlert} />
      </div>
    </div>
  );
};

export default Home;

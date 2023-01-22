import AddNote from "./AddNote";
import Notes from "./Notes";

const Home = () => {
  // const context = useContext(noteContext);
  // const { notes, setNotes } = context;
  return (
    <div>
      <div className="container my-3">
        <Notes />
      </div>
    </div>
  );
};

export default Home;

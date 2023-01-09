import "./App.css";
import Profile from "./profile/Profile";
import ProfilePic from "./profile/ProfilePic";

const handleName= (name)=>{
  return alert(name);
}

function App() {
  return (
    <div
      style={{
        height: "800px",
        marginTop: "-10px",
        padding: "50px",
        display: "flex",
        backgroundColor: "black"
      }}
    >
      <Profile
        handleName={handleName}
        fullName="Cherif Sassi"
        bio="web developper"
        profession="Sales consultant"
      >
        <ProfilePic imagePath = {'PHOTO.jpg'}/>
      </Profile>
      
      
    </div>
  );
}

export default App;

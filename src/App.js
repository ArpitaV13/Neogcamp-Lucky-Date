import "./styles.css";
import bg from "/src/bg.svg";

export default function App() {
  return (
    <div className="App">
      <div
        className="background"
        style={{
          
          minHeight: "100vh",
          backgroundAttachment: "fixed",
          backgroundImage: `url("${bg}")`,
          backgroundBlendMode:"lighten",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div className="content" style={{
          backgroundColor:"var(--div-color)",
          height:"10vh",
          backgroundBlendMode:"lighten",
          maxWidth:"50vw",
          margin:"auto"
        }}>
          <h2>Is your Birthday Lucky?</h2>
        </div>
        
      </div>
    </div>
  );
}

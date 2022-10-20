import "./styles.css";
import grapesjs from "grapesjs";
import "grapesjs-blocks-bootstrap4";
var editor = grapesjs.init({
  container: "#gjs",
  storageManager: { type: "local" },
  height: "100vh",
  plugins: ["grapesjs-blocks-bootstrap4"],
  canvas: {
    styles: [
      "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    ],
    scripts: [
      "https://code.jquery.com/jquery-3.3.1.slim.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
      "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
    ]
  }
});

editor.on("run:preview", () => {
  // Execute a callback on all inner components starting from the root
  editor.DomComponents.getWrapper().onAll(
    (comp) => comp.is("link") && comp.set({ editable: false })
  );
});

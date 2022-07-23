import "./Style.css";
export default Form;
function Form() {
  return (
    <div>
      <h1 className="text">
        The <span className="cl-text">privacy-friendly</span> URL Shortener
      </h1>
          <section className="ctn-bg">
        
        <h1>Link Shortener</h1>
        <div className="ctn-btn">
          <p>Enter a Link:</p>
          <input type="email" />
          <button><span className="btn-right"> sub </span></button>
        </div>
        <div className="ctn-btn">
          <p>Short domain:</p>
          <button><span className="btn-content-ctn">shrtco.de</span></button>
          <button><span className="btn-content-ctn">9qr.de</span></button>
          <button><span className="btn-content-ctn">shiny.link</span></button>
        </div>
        <p className="text-ctn">
          With this free Link Shortener you can make Links shorter and easier to
          remember. Just enter a Link into the form and click on the above
          Button to generate a short Link. When visiting the short-Link, the
          short-Link will immediately redirect yoy to the long Link
        </p>
          </section>
          <p className="text-foot">By using shrtcode you agree to our <span className="strong-text">Terms of Service</span></p>
    </div>
  );
}
//hic het thoi gian :(((

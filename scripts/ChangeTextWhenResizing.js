function updateTextWhenResizing() {
  let textElement = document.querySelector("[data-js-header-text]");
  

  const updateText = () => {

    textElement.textContent = window.innerWidth < 490
        ? "Subscribe to our Newsletter For Blogs and Resources"
        : "Subscribe to our Newsletter For New & latest Blogs and Resources";
  };

  updateText();

  window.addEventListener("resize", updateText);
}

export default updateTextWhenResizing;

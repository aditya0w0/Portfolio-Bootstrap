document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("toggleMode").addEventListener("change", function () {
      const isChecked = this.checked;
      document.getElementById("SpanCheckbox").textContent = isChecked ? "Professional" : "Casual";
    });
  });

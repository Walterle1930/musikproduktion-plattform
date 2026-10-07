document.addEventListener("DOMContentLoaded", () => {
  const orderForm = document.getElementById("orderForm");
  const saveOrderBtn = document.getElementById("saveOrderBtn");
  const printInvoiceBtn = document.getElementById("printInvoiceBtn");
  const runAnalysisBtn = document.getElementById("runAnalysisBtn");
  const analysisInput = document.getElementById("analysisInput");
  const scoreLabel = document.querySelector(".score-meta strong");
  const progressBar = document.querySelector(".score-block .progress span");

  const updateSavedOrderState = () => {
    const formData = new FormData(orderForm);
    const values = Object.fromEntries(formData.entries());
    localStorage.setItem("audiFlowOrder", JSON.stringify(values));
  };

  const loadSavedOrder = () => {
    const saved = localStorage.getItem("audiFlowOrder");
    if (!saved) return;

    try {
      const data = JSON.parse(saved);
      Object.entries(data).forEach(([key, value]) => {
        const field = orderForm.elements.namedItem(key);
        if (field) field.value = value;
      });
    } catch (error) {
      console.error("Could not parse saved order", error);
    }
  };

  if (orderForm) {
    orderForm.addEventListener("submit", (event) => {
      event.preventDefault();
      updateSavedOrderState();
      const button = event.submitter || orderForm.querySelector("button[type='submit']");
      if (button) {
        button.textContent = "Auftrag gespeichert";
        button.disabled = true;
        setTimeout(() => {
          button.textContent = "Auftrag anlegen";
          button.disabled = false;
        }, 1800);
      }
    });

    saveOrderBtn?.addEventListener("click", updateSavedOrderState);
  }

  if (printInvoiceBtn) {
    printInvoiceBtn.addEventListener("click", () => {
      window.print();
    });
  }

  if (runAnalysisBtn && analysisInput && scoreLabel && progressBar) {
    runAnalysisBtn.addEventListener("click", () => {
      const rawText = analysisInput.value.trim();
      const baseScore = Math.max(84, 100 - (rawText.length % 18) * 0.6);
      const score = Number(baseScore.toFixed(1));
      scoreLabel.textContent = `${score}%`;
      progressBar.style.width = `${score}%`;
      runAnalysisBtn.textContent = "Analyse fertig";

      setTimeout(() => {
        runAnalysisBtn.textContent = "Analyse ausführen";
      }, 1400);
    });
  }

  loadSavedOrder();
});

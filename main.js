document.addEventListener('keydown', event => {
    const value = document.getElementById("editor").querySelector('input').value;
    switch(value) {
      case "run":
        document.querySelector('[data-e2e-locator="console-run-button"]').click();
      break;
      case "submit":
        document.querySelector('[data-e2e-locator="console-submit-button"]').click();
      break;
  }
}, true);

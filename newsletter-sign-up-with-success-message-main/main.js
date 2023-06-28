document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("subscribe").addEventListener("click", () => {
    const email = document.getElementById("email-input").value;
    if (email === "") {
      document.getElementById("email-input-error").innerText = "invalid email address";
      return;
    }
    document.getElementById("email-input-error").innerText = "";
    document.getElementById("email").innerText = email;
    document.getElementById("main").classList.add("hidden");
    document.getElementById("popup").classList.remove("hidden");
  });

  document.getElementById("popup-dismiss").addEventListener("click", () => {
    document.getElementById("main").classList.remove("hidden");
    document.getElementById("popup").classList.add("hidden");
  });
});

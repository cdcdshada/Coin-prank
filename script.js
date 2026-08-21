function startPrank() {
  const nickname = document.getElementById("nickname").value.trim();

  if (!nickname) {
    alert("Please enter a nickname.");
    return;
  }

  document.getElementById("nickname").disabled = true;
  document.querySelector("button").classList.add("hidden");
  document.getElementById("loading").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("loading").classList.add("hidden");

    document.getElementById("hello").textContent =
      "Congratulations, " + nickname + "!";

    document.getElementById("result").classList.remove("hidden");

    setTimeout(() => {
      document.getElementById("result").classList.add("hidden");
      document.getElementById("prank").classList.remove("hidden");
    }, 2500);

  }, 2000);
}

function resetPrank() {
  document.getElementById("nickname").value = "";
  document.getElementById("nickname").disabled = false;
  document.getElementById("prank").classList.add("hidden");
  document.querySelector("button").classList.remove("hidden");
}

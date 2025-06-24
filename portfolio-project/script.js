document.getElementById("recommendation-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const recommendation = document.createElement("div");
  recommendation.className = "recommendation";
  recommendation.innerText = `" ${message} " ${name ? '- ' + name : ''}`;

  const form = document.getElementById("recommendation-form");
  form.before(recommendation);

  alert("Thanks for your recommendation!");
  form.reset();
});
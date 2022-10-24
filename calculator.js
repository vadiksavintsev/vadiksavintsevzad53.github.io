window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("my-button");
  b.addEventListener("click", proz);
});


function proz() {
  const check =/^\d*\.?\d+$/;
  let f1 = document.getElementsByName("proz1");
  let f2 = document.getElementsByName("proz2");
  let r =document.getElementById("result");
  if (check.test(f1[0].value) == false || check.test(f2[0].value) == false || f1[0].value == 0 || f2[0].value == 0)
  {
      alert("Введите корректно!");
  }
  else
  {
      f1[0]=Number.parseInt(f1[0])
      f2[0]=Number.parseInt(f2[0]);
      r.innerHTML = f1[0].value * f2[0].value;
      return false;
  }
}

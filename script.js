const dob = document.querySelector("#dob");
const doc = document.querySelector("#checkDate");
const calBtn = document.querySelector("body div div button");
const dayOp = document.querySelector("#day");
const monthOp = document.querySelector("#month");
const yearOp = document.querySelector("#year");

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

calBtn.addEventListener("click", function () {
  let dobIp = dob.value.split("-");
  let docIp = doc.value.split("-");
  if (dobIp.length != 3 || docIp.length != 3) {
    return alert("please fill both fields");
  }
  dobIp = dobIp.map((ele) => Number.parseInt(ele));
  docIp = docIp.map((ele) => Number.parseInt(ele));

  if (
    dobIp[0] > docIp[0] ||
    (dobIp[0] == docIp[0] && dobIp[1] > docIp[1]) ||
    (dobIp[0] == docIp[0] && dobIp[1] == docIp[1] && dobIp[2] > docIp[2])
  ) {
    return alert("please enter valid birth date");
  }

  months[1] =
    (docIp[0] % 4 == 0 && docIp[0] % 100 != 0) ||
    (docIp[0] % 400 == 0 && docIp[0] % 100 == 0)
      ? 29
      : 28;

  const year =
    dobIp[1] > docIp[1] || (dobIp[1] == docIp[1] && dobIp[2] > docIp[2])
      ? docIp[0] - dobIp[0] - 1
      : docIp[0] - dobIp[0];

  const month =
    dobIp[2] > docIp[2]
      ? (12 - dobIp[1] + docIp[1] + 11) % 12
      : (12 - dobIp[1] + docIp[1]) % 12;

  const day =
    (months[dobIp[1] - 1] - dobIp[2] + docIp[2]) % months[dobIp[1] - 1];

  yearOp.innerText = year;
  monthOp.innerText = month;
  dayOp.innerText = day;
});

const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");
const homeBox1 = document.querySelector(".inner-box1");
const homeBox2 = document.querySelector(".inner-box2");
const boxEntries1 = document.querySelector(".line-item-box1");
const boxEntries2 = document.querySelector(".line-item-box2");
const lineItems = document.querySelectorAll(".line-entry-item1");
const moreBtn = document.querySelector(".add-item-btn1");
const moreBtn2 = document.querySelector(".add-item-btn2");
const submitBtn1 = document.querySelector(".submit-btn1");
const abelEntries = [];
const entryDate = [];

// event listener

moreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createNewLineItem(boxEntries1);
});
moreBtn2.addEventListener("click", (e) => {
  e.preventDefault();
  createNewLineItem(boxEntries2);
});

submitBtn1.addEventListener("click", (e) => {
  e.preventDefault();
  submitForm(form1);
});

function submitForm(x) {
  x.children[1].classList.toggle("receipt");
  if (x.children[1].classList.contains("receipt")) {
    lineItems.forEach((div, index, divs) => {
      abelEntries.push(div.children);
      div.style.display = "none";
    });
    submitBtn1.innerText = "Edit";
    // create div append to homeBox1
    // this will replace boxEntries1
    boxEntries1.style.display = "none";
    const newDiv = document.createElement("div");
    newDiv.classList.add("receipt-list1");
    // create details to replace line-item-entry1 with desc and price
    abelEntries.forEach((entry, index, entries) => {
      const itemDesc = entry[0].value;
      const itemAmount = entry[1].value;
      // create div
      const lineItemEntryReceipt = document.createElement("div");
      lineItemEntryReceipt.classList.add("line-receipt-entry1");
      lineItemEntryReceipt.innerHTML = `<p>${itemDesc}</p> <p>${itemAmount}</p>`;
      // append to newDiv
      newDiv.appendChild(lineItemEntryReceipt);
    });
    homeBox1.appendChild(newDiv);
  } else {
    boxEntries1.style.display = "flex";
    lineItems.forEach((div, index, divs) => {
      div.style.display = "inline-flex";
    });
    submitBtn1.innerText = "Submit";
    clearEntries = [];
    abelEntries.push(clearEntries);
  }
  // console.log(
  //   abelEntries.forEach((entry, index, entries) => {
  //     const itemDesc = entry[0].value;
  //     const itemAmount = entry[1].value;
  //     console.log(itemDesc, itemAmount);
  //   })
  // );

  // console.log(abelEntries[0][0].value);
  // console.log(abelEntries[0][1].value);
}

function createNewLineItem(x) {
  //   create div
  const lineEntry = document.createElement("div");
  if (x.classList.contains("line-item-box1")) {
    lineEntry.classList.add("line-entry-item1");
  } else {
    lineEntry.classList.add("line-entry-item2");
  }
  //   create select element
  const select = document.createElement("select");
  select.classList.add("Description");
  select.setAttribute("id", "description");
  lineEntry.appendChild(select);

  // option 1
  const option = document.createElement("option");
  option.setAttribute("value", "groceries");
  option.innerText = "Groceries";
  select.appendChild(option);
  // option2
  const option2 = document.createElement("option");
  option2.setAttribute("value", "dining-out");
  option2.innerText = "Dining Out";
  select.appendChild(option2);

  const option3 = document.createElement("option");
  option3.setAttribute("value", "travel-leisure");
  option3.innerText = "Travel/Leisure";
  select.appendChild(option3);

  const option4 = document.createElement("option");
  option4.setAttribute("value", "bills/utilities");
  option4.innerText = "Bills/utilities";
  select.appendChild(option4);

  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("placeholder", "$");
  lineEntry.appendChild(input);

  x.appendChild(lineEntry);
}

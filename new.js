// For browser version

const age = document.getElementById("age");
const price = document.getElementById("price");
const capacity = document.getElementById("capacity");
const btn = document.getElementById("btn");
const container = document.getElementById("container");
const container2 = document.getElementById("container2");

const engine = document.querySelectorAll('input[name="first"]');
const person = document.querySelectorAll('input[name="second"]');
const type = document.querySelectorAll('input[name="third"]');
//   const benefit = document.querySelector('input[name="forth"]');
const buy = document.querySelector('input[name="fifth"]');
const brnet = document.querySelectorAll('input[name="price"]');

const labelAge = document.querySelector(".labelAge");
const labelPrice = document.querySelector(".labelPrice");
const labelCapacity = document.querySelector(".labelCapacity");

let resCustomPrice = document.getElementById("res");
let res = 0;

function handleChange(v) {
  if (v.value === "electro") {
    container.style.display = "none";
    container2.style.display = "block";
  } else {
    container.style.display = "block";
    container2.style.display = "none";
  }
}

function handleHide(h) {
  //   const benefitNone = document.querySelector(".benefit");
  //   if (h.value === "entity") {
  //     benefitNone.style.display = "none";
  //   } else {
  //     benefitNone.style.display = "block";
  //   }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let personV = "";
  let engineV = "";
  let typeV = "";

  for (const f of engine) {
    if (f.checked) engineV = f.value;
  }

  for (const p of person) {
    if (p.checked) personV = p.value;
  }

  for (const t of type) {
    if (t.checked) typeV = t.value;
  }
  validation(age.value, price.value, capacity.value, personV, engineV, typeV);
});

function checkFunc(age, price, capacity, person, engine, type) {
  if (engine === "electro") {
    if (buy.checked) {
      // if (benefit.checked) {
      //   res = (price * 7.5) / 100;
      // } else {
      res = (price * 15) / 100;
      //   resCustomPrice.innerHTML = res;
      customMore(person, res, capacity);
      return res;
      // }
    } else {
      formula(0, 0);
    }
  } else {
    container.style.display = "block";
    switch (person) {
      case "entity":
        entityF(age, price, capacity, type, person);
        break;
      case "person":
        personF(age, price, capacity, person);
        break;
    }
  }
}

function entityF(age, price, capacity, type, person) {
  if (type === "petrol") {
    if (age < 3) {
      let res2 = price / capacity;
      if (capacity <= 1000) {
        formula3(price, capacity, res2, 30, 1.2, person);
      } else if (capacity >= 1001 && capacity <= 1500) {
        formula3(price, capacity, res2, 30, 1.45, person);
      } else if (capacity >= 1501 && capacity <= 1800) {
        formula3(price, capacity, res2, 30, 1.5, person);
      } else if (capacity >= 1801 && capacity <= 2300) {
        formula3(price, capacity, res2, 30, 2.15, person);
      } else if (capacity >= 2301 && capacity <= 3000) {
        formula3(price, capacity, res2, 30, 1.15, person);
      } else if (capacity >= 3001) {
        formula3(price, capacity, res2, 30, 2.8, person);
      }
    } else if (age >= 3 && age <= 5) {
      let res2 = price / capacity;
      if (capacity <= 1000) {
        formula3(price, capacity, res2, 35, 1.2, person);
      } else if (capacity >= 1001 && capacity <= 1500) {
        formula3(price, capacity, res2, 35, 1.45, person);
      } else if (capacity >= 1501 && capacity <= 1800) {
        formula3(price, capacity, res2, 35, 1.5, person);
      } else if (capacity >= 1801 && capacity <= 2300) {
        formula3(price, capacity, res2, 35, 2.15, person);
      } else if (capacity >= 2301 && capacity <= 3000) {
        formula3(price, capacity, res2, 35, 1.15, person);
      } else if (capacity >= 3001) {
        formula3(price, capacity, res2, 35, 2.8, person);
      }
    } else if (age > 5) {
      if (capacity <= 1000) {
        formula(capacity, 2.5, person);
      } else if (capacity > 1001 && capacity <= 1500) {
        formula(capacity, 2.7, person);
      } else if (capacity > 1501 && capacity <= 1800) {
        formula(capacity, 2.9, person);
      } else if (capacity > 1801 && capacity <= 2300) {
        formula(capacity, 4, person);
      } else if (capacity > 2301 && capacity <= 3000) {
        formula(capacity, 4, person);
      } else if (capacity > 3001) {
        formula(capacity, 5.8, person);
      }
    }
  } else {
    if (age < 3) {
      let res2 = price / capacity;
      if (capacity <= 1500) {
        formula3(price, capacity, res2, 30, 1.45, person);
      } else if (capacity >= 1501 && capacity <= 2500) {
        formula3(price, capacity, res2, 30, 1.9, person);
      } else if (capacity >= 2501) {
        formula3(price, capacity, res2, 30, 2.8, person);
      }
    } else if (age >= 3 && age <= 5) {
      let res2 = price / capacity;
      if (capacity <= 1500) {
        formula3(price, capacity, res2, 35, 1.45, person);
      } else if (capacity >= 1501 && capacity <= 2500) {
        formula3(price, capacity, res2, 35, 2.15, person);
      } else if (capacity >= 2501) {
        formula3(price, capacity, res2, 35, 2.8, person);
      }
    } else if (age > 5) {
      if (capacity <= 1500) {
        formula(capacity, 2.7, person);
      } else if (capacity > 1501 && capacity <= 2500) {
        formula(capacity, 4, person);
      } else if (capacity > 2501) {
        formula(capacity, 5.8, person);
      }
    }
  }
}

function personF(age, price, capacity, person) {
  const nds = document.querySelector("#nds");
  nds.style.display = "none";
  //   const benefitNone = document.querySelector(".benefit");

  //   benefitNone.style.display = "block";
  if (age < 3) {
    let res2 = price / capacity;
    if (price <= 8500) {
      formula3(price, capacity, res2, 54, 2.5, person);
    } else if (price >= 8501 && price <= 16700) {
      formula3(price, capacity, res2, 48, 3.5, person);
    } else if (price >= 16701 && price <= 42300) {
      formula3(price, capacity, res2, 48, 5.5, person);
    } else if (price >= 42301 && price <= 84500) {
      formula3(price, capacity, res2, 48, 7.5, person);
    } else if (price >= 84501 && price <= 169000) {
      formula3(price, capacity, res2, 48, 15, person);
    } else if (price >= 169001) {
      formula3(price, capacity, res2, 48, 20, person);
    }
  } else if (age >= 3 && age <= 5) {
    if (capacity <= 1000) {
      formula(capacity, 1.5, person);
    } else if (capacity > 1001 && capacity <= 1500) {
      formula(capacity, 1.7, person);
    } else if (capacity > 1501 && capacity <= 1800) {
      formula(capacity, 2.5, person);
    } else if (capacity > 1801 && capacity <= 2300) {
      formula(capacity, 2.7, person);
    } else if (capacity > 2301 && capacity <= 3000) {
      formula(capacity, 3, person);
    } else if (capacity > 3001) {
      formula(capacity, 3.6, person);
    }
  } else if (age > 5) {
    if (capacity <= 1000) {
      formula(capacity, 3, person);
    } else if (capacity > 1001 && capacity <= 1500) {
      formula(capacity, 3.2, person);
    } else if (capacity > 1501 && capacity <= 1800) {
      formula(capacity, 3.5, person);
    } else if (capacity > 1801 && capacity <= 2300) {
      formula(capacity, 4.8, person);
    } else if (capacity > 2301 && capacity <= 3000) {
      formula(capacity, 5, person);
    } else if (capacity > 3001) {
      formula(capacity, 5.7, person);
    }
  }
}

function formula(cap, euro, person) {
  //   if (benefit.checked) {
  res = (cap * euro) / 2;
  //   } else {
  //   res = cap * euro;
  customMore(person, res, cap);
  //   resCustomPrice.innerHTML = res;
  return res;
  //}
}

let sbor = 0;

function formulaUtil(age, type, person, capacity) {
  if (person === "person") {
    if (age < 3) {
      return (sbor = 544.5);
    } else if (age >= 3 && age <= 7) {
      return (sbor = 816.7);
    } else if (age > 7) {
      return type === "electro" ? (sbor = 816.7) : (sbor = 1225.1);
    }
  } else {
    if (capacity < 1000) {
      if (age < 3) {
        return (sbor = 1652.2);
      } else if (age >= 3 && age <= 7) {
        return (sbor = 5771.7);
      } else if (age > 7) {
        return (sbor = 8657.6);
      }
    } else if (capacity >= 1000 && capacity <= 2000) {
      if (age < 3) {
        return (sbor = 6115.2);
      } else if (age >= 3 && age <= 7) {
        return (sbor = 8995.1);
      } else if (age > 7) {
        return (sbor = 13492.7);
      }
    } else if (capacity >= 2001 && capacity <= 3000) {
      if (age < 3) {
        return (sbor = 9652.7);
      } else if (age >= 3 && age <= 7) {
        return (sbor = 17554.7);
      } else if (age > 7) {
        return (sbor = 26332.1);
      }
    } else if (capacity >= 3001 && capacity <= 3500) {
      if (age < 3) {
        return (sbor = 8898.6);
      } else if (age >= 3 && age <= 7) {
        return (sbor = 31036.5);
      } else if (age > 7) {
        return (sbor = 46554.8);
      }
    } else if (capacity >= 3501) {
      if (age < 3) {
        return (sbor = 15253.7);
      } else if (age >= 3 && age <= 7) {
        return (sbor = 38125.9);
      } else if (age > 7) {
        return (sbor = 57188.9);
      }
    }
  }
}

function formula2(res1, person, capacity) {
  //   if (benefit.checked) {
  res = (Number(res1) / 2).toFixed(2);
  //   } else {
  //   res = Number(res1).toFixed(2);
  customMore(person, res, capacity);
  //   resCustomPrice.innerHTML = res;
  return res;
  // }
}

function formula4(res2, capacity, person) {
  //   if (benefit.checked) {
  res = ((Number(res2) * capacity) / 2).toFixed(2);
  //   } else {
  //   res = (res2 * capacity).toFixed(2);
  customMore(person, res, capacity);
  //   resCustomPrice.innerHTML = res;
  return res;
  //}
}

function formula3(price, capacity, res2, perc, euro, person) {
  let res1 = (price / 100) * perc;
  let res3 = res1 / capacity;
  if (res3 > euro) {
    formula2(res1.toFixed(2), person, capacity);
  } else {
    formula(capacity, euro, person);
  }
}

function validation(age, price, capacity, person, engine, type) {
  const err = document.querySelector(".error");
  const errNegative = document.querySelector(".errorNegative");
  if (age == "" || price == "" || capacity == "") {
    err.style.display = "block";
    errNegative.style.display = "none";
    return false;
  } else if (age < 0 || price < 0 || capacity < 0) {
    errNegative.style.display = "block";
    err.style.display = "none";
  } else {
    err.style.display = "none";
    errNegative.style.display = "none";

    checkFunc(age, price, capacity, person, engine, type);
    formulaUtil(age, engine, person, capacity);
    if (person === "entity") {
      formulaNDS(price);
    }
  }
}

function formulaNDS(price) {
  const nds = document.querySelector("#nds");
  nds.style.display = "block";
  let num = (Number(price) + Number(res)) * 0.2;
  console.log(price);
  console.log(res);
  nds.innerHTML = `НДС 20% : ${num.toFixed(2)}руб.`;
  res = 0;
}

function customMore(person, res, capacity) {
  let fullCustom;
  console.log(`Custom simple ${res}`);
  if (person === "person") {
    if (capacity <= 2500) {
      fullCustom = Number(res) + 1500;
    } else {
      fullCustom = Number(res) + 1800;
    }
  } else {
    fullCustom = Number(res);
  }

  console.log(`Custom full ${fullCustom}`);

  fullCarPrice(fullCustom, price.value);
}

let finalCarPrice = 0;

function fullCarPrice(fullCustom, price) {
  let expenses = 1000;
  let carExpenses = 0;

  if (price <= 25000) {
    carExpenses = price * 0.12 + expenses + fullCustom;
  } else if (price > 25000 && price <= 35000) {
    carExpenses = price * 0.112 + expenses + fullCustom;
  } else if (price > 35000 && price <= 45000) {
    carExpenses = price * 0.115 + expenses + fullCustom;
  } else if (price > 45000 && price <= 55000) {
    carExpenses = price * 0.12 + expenses + fullCustom;
  } else if (price > 55000 && price <= 65000) {
    carExpenses = price * 0.11 + expenses + fullCustom;
  } else if (price > 65000 && price <= 75000) {
    carExpenses = price * 0.12 + expenses + fullCustom;
  } else if (price > 75000) {
    carExpenses = price * 0.105 + expenses + fullCustom;
  }

  console.log(`Полные завтраты на машину: ${carExpenses}`);

  let brnetV;

  for (const b of brnet) {
    if (b.checked) brnetV = b.value;
  }

  if (brnetV === "brutto") {
    finalCarPrice = Number(carExpenses) + Number(price);
  } else {
    finalCarPrice = Number(carExpenses) + Number(price) * 0.84;
  }
  displayResults(finalCarPrice);
}

function displayResults(finalCarPrice) {
  let results = document.querySelector(".result");
  console.log(finalCarPrice);
  resCustomPrice.innerHTML = finalCarPrice.toFixed(2);
  results.style.display = "block";
  sbor = 0;
  finalCarPrice = 0;
}

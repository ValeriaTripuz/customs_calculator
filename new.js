const age = document.getElementById("age");
const price = document.getElementById("price");
const capacity = document.getElementById("capacity");
const btn = document.getElementById("btn");
const container = document.getElementById("container");
const container2 = document.getElementById("container2");

const engine = document.querySelectorAll('input[name="first"]');
const person = document.querySelectorAll('input[name="second"]');
const type = document.querySelectorAll('input[name="third"]');
const benefit = document.querySelector('input[name="forth"]');
const buy = document.querySelector('input[name="fifth"]');

function handleChange(v) {
  if (v.value === "electro") {
    container.style.display = "none";
    container2.style.display = "block";
  } else {
    container.style.display = "block";
    container2.style.display = "none";
  }
}

for (var i = 0; i < engine.length; i++) {}
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

  checkFunc(age.value, price.value, capacity.value, personV, engineV, typeV);
});

function checkFunc(age, price, capacity, person, engine, type) {
  if (engine === "electro") {
    let res = document.getElementById("res");

    if (buy.checked) {
      console.log(price);
      if (benefit.checked) {
        res.innerHTML = (price * 7.5) / 100;
      } else {
        res.innerHTML = (price * 15) / 100;
      }
    } else {
      formula(0, 0);
    }
  } else {
    container.style.display = "block";
    switch (person) {
      case "entity":
        entityF(age, price, capacity, type);
        break;
      case "person":
        personF(age, price, capacity);
        break;
    }
  }
}

function entityF(age, price, capacity, type) {
  if (type === "petrol") {
    if (age < 3) {
      let res2 = price / capacity;
      if (capacity <= 1000) {
        formula3(price, capacity, res2, 30, 1.2);
      } else if (capacity >= 1001 && capacity <= 1500) {
        formula3(price, capacity, res2, 30, 1.45);
      } else if (capacity >= 1501 && capacity <= 1800) {
        formula3(price, capacity, res2, 30, 1.5);
      } else if (capacity >= 1801 && capacity <= 2300) {
        formula3(price, capacity, res2, 30, 2.15);
      } else if (capacity >= 2301 && capacity <= 3000) {
        formula3(price, capacity, res2, 30, 1.15);
      } else if (capacity >= 3001) {
        formula3(price, capacity, res2, 30, 2.8);
      }
    } else if (age >= 3 && age <= 5) {
      let res2 = price / capacity;
      if (capacity <= 1000) {
        formula3(price, capacity, res2, 35, 1.2);
      } else if (capacity >= 1001 && capacity <= 1500) {
        formula3(price, capacity, res2, 35, 1.45);
      } else if (capacity >= 1501 && capacity <= 1800) {
        formula3(price, capacity, res2, 35, 1.5);
      } else if (capacity >= 1801 && capacity <= 2300) {
        formula3(price, capacity, res2, 35, 2.15);
      } else if (capacity >= 2301 && capacity <= 3000) {
        formula3(price, capacity, res2, 35, 1.15);
      } else if (capacity >= 3001) {
        formula3(price, capacity, res2, 35, 2.8);
      }
    } else if (age > 5) {
      if (capacity <= 1000) {
        formula(capacity, 2.5);
      } else if (capacity > 1001 && capacity <= 1500) {
        formula(capacity, 2.7);
      } else if (capacity > 1501 && capacity <= 1800) {
        formula(capacity, 2.9);
      } else if (capacity > 1801 && capacity <= 2300) {
        formula(capacity, 4);
      } else if (capacity > 2301 && capacity <= 3000) {
        formula(capacity, 4);
      } else if (capacity > 3001) {
        formula(capacity, 5.8);
      }
    }
  } else {
    if (age < 3) {
      let res2 = price / capacity;
      if (capacity <= 1500) {
        formula3(price, capacity, res2, 30, 1.45);
      } else if (capacity >= 1501 && capacity <= 2500) {
        formula3(price, capacity, res2, 30, 1.9);
      } else if (capacity >= 2501) {
        formula3(price, capacity, res2, 30, 2.8);
      }
    } else if (age >= 3 && age <= 5) {
      let res2 = price / capacity;
      if (capacity <= 1500) {
        formula3(price, capacity, res2, 35, 1.45);
      } else if (capacity >= 1501 && capacity <= 2500) {
        formula3(price, capacity, res2, 35, 2.15);
      } else if (capacity >= 2501) {
        formula3(price, capacity, res2, 35, 2.8);
      }
    } else if (age > 5) {
      if (capacity <= 1500) {
        formula(capacity, 2.7);
      } else if (capacity > 1501 && capacity <= 2500) {
        formula(capacity, 4);
      } else if (capacity > 2501) {
        formula(capacity, 5.8);
      }
    }
  }
}

function personF(age, price, capacity) {
  if (age < 3) {
    let res2 = price / capacity;
    if (price <= 8500) {
      formula3(price, capacity, res2, 54, 2.5);
    } else if (price >= 8501 && price <= 16700) {
      formula3(price, capacity, res2, 48, 3.5);
    } else if (price >= 16701 && price <= 42300) {
      formula3(price, capacity, res2, 48, 5.5);
    } else if (price >= 42301 && price <= 84500) {
      formula3(price, capacity, res2, 48, 7.5);
    } else if (price >= 84501 && price <= 169000) {
      formula3(price, capacity, res2, 48, 15);
    } else if (price >= 169001) {
      formula3(price, capacity, res2, 48, 20);
    }
  } else if (age >= 3 && age <= 5) {
    if (capacity <= 1000) {
      formula(capacity, 1.5);
    } else if (capacity > 1001 && capacity <= 1500) {
      formula(capacity, 1.7);
    } else if (capacity > 1501 && capacity <= 1800) {
      formula(capacity, 2.5);
    } else if (capacity > 1801 && capacity <= 2300) {
      formula(capacity, 2.7);
    } else if (capacity > 2301 && capacity <= 3000) {
      formula(capacity, 3);
    } else if (capacity > 3001) {
      formula(capacity, 3.6);
    }
  } else if (age > 5) {
    if (capacity <= 1000) {
      formula(capacity, 3);
    } else if (capacity > 1001 && capacity <= 1500) {
      formula(capacity, 3.2);
    } else if (capacity > 1501 && capacity <= 1800) {
      formula(capacity, 3.5);
    } else if (capacity > 1801 && capacity <= 2300) {
      formula(capacity, 4.8);
    } else if (capacity > 2301 && capacity <= 3000) {
      formula(capacity, 5);
    } else if (capacity > 3001) {
      formula(capacity, 5.7);
    }
  }
}

function formula(cap, euro) {
  let res = document.getElementById("res");
  if (benefit.checked) {
    res.innerHTML = (cap * euro) / 2;
  } else {
    res.innerHTML = cap * euro;
  }
}

function formula2(res1) {
  let res = document.getElementById("res");
  if (benefit.checked) {
    res.innerHTML = res1 / 2;
  } else {
    res.innerHTML = res1;
  }
}

function formula4(res2, capacity) {
  let res = document.getElementById("res");
  if (benefit.checked) {
    res.innerHTML = (res2 * capacity) / 2;
  } else {
    res.innerHTML = res2 * capacity;
  }
}

function formula3(price, capacity, res2, perc, euro) {
  let res1 = (price / 100) * perc;
  console.log(res1 / capacity, res2);
  let res3 = res1 / capacity;
  if (res3 > euro) {
    formula2(res1);
  } else {
    formula(capacity, euro);
  }
}

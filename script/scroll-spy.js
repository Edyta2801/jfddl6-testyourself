inView("#section-hero")
  .on("enter", function() {
    document
      .querySelector("#section-nav-top__home-id")
      .classList.add("active");
      console.log('jest w hero')
  })
  .on("exit", function() {
    document
      .querySelector("#section-nav-top__home-id")
      .classList.remove("active");
  });

inView("#section-function")
  .on("enter", function() {
    document
      .querySelector("#section-nav-top__function-id")
      .classList.add("active");
  })
  .on("exit", function() {
    document
      .querySelector("#section-nav-top__function-id")
      .classList.remove("active");
  });

inView("#section-info-products")
  .on("enter", function() {
    document
      .querySelector("#section-nav-top__product-id")
      .classList.add("active");
  })
  .on("exit", function() {
    document
      .querySelector("#section-nav-top__product-id")
      .classList.remove("active");
  });

inView("#section-info-team")
  .on("enter", function() {
    document
      .querySelector("#section-nav-top__team-id")
      .classList.add("active");
  })
  .on("exit", function() {
    document
      .querySelector("#section-nav-top__team-id")
      .classList.remove("active");
  });

inView("#section-registration-premiere")
  .on("enter", function() {
    document
      .querySelector("#section-nav-top__premiere-reg-id")
      .classList.add("active");
  })
  .on("exit", function() {
    document
      .querySelector("#section-nav-top__premiere-reg-id")
      .classList.remove("active");
  });

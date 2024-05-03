import React from "react";

export default function MainPage() {
  return (
    <section id="mainPage" class="mainPage d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 d-flex flex-column justify-content-center text-center ">
            <h1 data-aos="fade-up">
              Available registration information to you
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
              Feel free by scrolling down. You can
              do well by clicking on th Get Started Button.
            </h2>
            <div data-aos="fade-up" data-aos-delay="600">
              <div class="text-center text-lg-start">
                <a
                  href="#about"
                  class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span >Get Started</span>
                  <i class="bi bi-arrow-down"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            class="col-lg-6 hero-img "
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img src="/img/favor22.png" class="img-fluid shadow" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

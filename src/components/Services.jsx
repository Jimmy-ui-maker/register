import React from "react";

export default function Services() {
  return (
    <section id="informations" class="services section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>List of Registration Informations</h2>
          <p>
            Here are the list of relevant registration information within the
            campus.
          </p>
        </div>

        <div class="row text-lg-start text-center">
          <div
            class="col-xl-3 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div class="icon-box">
              <div class="icon">
                <i class="bi bi-house"></i>
              </div>
              <h4>
                <a href="">School fees Payment</a>
              </h4>
              <p>
                ICT Office, or ypu can visit any nearby FCMB Bank.
              </p>
            </div>
          </div>

          <div
            class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="icon-box">
              <div class="icon">
                <i class="bi bi-house"></i>
              </div>
              <h4>
                <a href="">Screening</a>
              </h4>
              <p>
                Ask anyone you see in the campus to direct you to your epartment.. Then...
              </p>
            </div>
          </div>

          <div
            class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div class="icon-box">
              <div class="icon">
                <i class="bi bi-house"></i>
              </div>
              <h4>
                <a href="">Green File</a>
              </h4>
              <p>
                Is the key relevant information you suppose to know while you are in the campus
              </p>
            </div>
          </div>

          <div
            class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div class="icon-box">
              <div class="icon">
                <i class="bi bi-house"></i>
              </div>
              <h4>
                <a href="">Matriculation</a>
              </h4>
              <p>
                Is the welcome address done to all newly admitted student
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

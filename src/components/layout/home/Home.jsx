import React from 'react';

export function Home() {
    return (
        <>
        <div >
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-9 mx-auto">
                        <h1 class="mt-5">University React Js Project</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
        <form>
          <div class="form-row">
            <div class="col-12 col-md-9 mt-5 mb-md-0">
              <input type="email" class="form-control form-control-lg" placeholder="Enter your email for subscribe..." />
            </div>
            <div class="col-12 col-md-3 mt-5">
              <button type="submit" class="btn btn-block btn-lg btn-danger">Subscribe</button>
            </div>
          </div>
        </form>
      </div>
      </>
    )
}
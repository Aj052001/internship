import React from 'react'

export default function Login() {
  return (
    <>

<div class="container-xxl">
  <div class="authentication-wrapper authentication-basic container-p-y">
    <div class="authentication-inner">
      <div class="card">
        <div class="card-body">
          
          <div class="app-brand justify-content-center">
            <a href="index.html" class="app-brand-link gap-2">
             <img  src="../assets/img/logo.png" alt=""/>
            </a>
          </div>
          {/* <!-- /Logo 
          <h4 class="mb-2">Welcome </h4>
          <p class="mb-4">Please sign-in to your account and start the adventure</p>--> */}

          <form id="formAuthentication" class="mb-3" action="index.html" method="POST">
            <div class="mb-3">
              <label for="email" class="form-label">Email or Username</label>
              <input
                type="text"
                class="form-control"
                id="email"
                name="email-username"
                placeholder="Enter your email or username"
                autofocus
              />
            </div>
            <div class="mb-3 form-password-toggle">
              <div class="d-flex justify-content-between">
                <label class="form-label" for="password">Password</label>
               
              </div>
              <div class="input-group input-group-merge">
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  name="password"
                  placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                  aria-describedby="password"
                />
                <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
              </div>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="remember-me" />
                <label class="form-check-label" for="remember-me"> Remember Me </label>
              </div>
            </div>
            <div class="mb-3">
              <button class="btn btn-primary d-grid w-100" type="submit">Sign in</button>
            </div>
          </form>

         
        </div>
      </div>
      {/* <!-- /Register --> */}
    </div>
  </div>
</div>


{/* <!-- Core JS --> */}
{/* <!-- build:js assets/vendor/js/core.js --> */}
<script src="../assets/vendor/libs/jquery/jquery.js"></script>
<script src="../assets/vendor/libs/popper/popper.js"></script>
<script src="../assets/vendor/js/bootstrap.js"></script>
<script src="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>

<script src="../assets/vendor/js/menu.js"></script>
{/* <!-- endbuild --> */}

{/* <!-- Vendors JS --> */}

{/* <!-- Main JS --> */}
<script src="../assets/js/main.js"></script>

{/* <!-- Page JS --> */}

{/* <!-- Place this tag in your head or just before your close body tag. --> */}
<script async defer src="https://buttons.github.io/buttons.js"></script>
    
    </>
  )
}

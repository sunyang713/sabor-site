<template>
  <div id="newsletter-subscription-page">
    <section class="newsletter-subscription bg-info py-5">
      <div class="container">
        <div class="card">
          <div class="card-block py-5">
            <h4 class="card-title display-4 text-center">Want a taste?</h4>
            <h6 class="card-subtitle text-muted text-center">Subscribe to our newsletter. No spam, promised.</h6>
            <hr class="my-4">
            <form method="POST" action="https://lists.columbia.edu/mailman/subscribe/saborgbody">
              <div class="row">
                <div class="form-group col-md">
                  <label class="sr-only" for="newsletter-subscription-input-name">Name</label>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa fa-user-o fa-fw"></i>
                    </div><!-- /.input-group-addon -->
                    <input class="form-control"
                      id="newsletter-subscription-input-name"
                      name="fullname"
                      type="text"
                      placeholder="Name"
                      aria-describedby="newsletter-subscription-help-message"
                      @focus="newsletterSubscriptionHelpMessage = 'Optional.'"
                      @blur="newsletterSubscriptionHelpMessage = null">
                  </div><!-- /.input-group -->
                </div><!-- /.form-group .col -->
                <div class="form-group col-md">
                  <label class="sr-only" for="newsletter-subscription-input-email">Email Address</label>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="fa fa-envelope-o fa-fw"></i>
                    </div><!-- /.input-group-addon -->
                    <input class="form-control"
                      id="newsletter-subscription-input-email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      aria-describedby="newsletter-subscription-help-message"
                      @focus="newsletterSubscriptionHelpMessage = 'Required. We\'ll never share your email with anyone else.'"
                      @blur="newsletterSubscriptionHelpMessage = null">
                  </div><!-- /.input-group -->
                </div><!-- /.form-group .col-md -->
              </div><!-- /.row -->
              <div class="form-group">
                <button class="btn btn-info" type="submit">Subscribe!</button>
                <transition name="v-fade">
                  <small class="form-text text-muted"
                    id="newsletter-subscription-help-message"
                    v-if="newsletterSubscriptionHelpMessage">
                    {{ newsletterSubscriptionHelpMessage }}
                  </small>
                </transition>
              </div><!-- /.form-group .text-left -->
            </form><!-- /form -->
          </div><!-- /.card-block -->
        </div><!-- /.card -->
      </div><!-- /.container -->
    </section><!-- /.newsletter-subscription -->
  </div><!-- /#newsletter-subscription-page -->
</template>

<script>
export default {
  data () {
    return {
      name: null,
      email: null,
      newsletterSubscriptionHelpMessage: null
    }
  }
}
</script>

<style scoped>

/* NEWSLETTER SUBSCRIPTION
–––––––––––––––––––––––––––––––––––––––––––––––––– */

@media (min-width: 768px) {
  .newsletter-subscription .container {
    max-width: 50rem;
  }

  .newsletter-subscription .card-block {
    width: 40rem;
    margin-right: auto;
    margin-left: auto;
  }
}

</style>

<template>
  <div id="newsletter-subscription-page">
    <section class="newsletter-subscription py-5">
      <div class="container">
        <h4 class="display-1 text-center">Want a taste?</h4>
        <h6 class="text-muted text-center">Subscribe to our newsletter. No spam, promised.</h6>
        <hr class="my-4">
        <form action="https://lists.columbia.edu/mailman/subscribe/saborgbody" method="POST">
          <div class="row">
            <div class="form-group col-md">
              <label for="newsletter-subscription-input-name" class="sr-only">Name</label>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fa fa-user-o fa-fw"></i>
                </div><!-- /.input-group-addon -->
                <input
                  v-model="name"
                  id="newsletter-subscription-input-name"
                  name="fullname"
                  type="text"
                  class="form-control"
                  aria-describedby="newsletter-subscription-help-message"
                  placeholder="Name"
                  @focus="newsletterSubscriptionHelpMessage = 'Optional.'"
                  @blur="newsletterSubscriptionHelpMessage = null">
              </div><!-- /.input-group -->
            </div><!-- /.form-group .col -->
            <div class="form-group col-md">
              <label for="newsletter-subscription-input-email" class="sr-only">Email Address</label>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fa fa-envelope-o fa-fw"></i>
                </div><!-- /.input-group-addon -->
                <input
                  v-model="email"
                  id="newsletter-subscription-input-email"
                  name="email"
                  type="email"
                  class="form-control"
                  aria-describedby="newsletter-subscription-help-message"
                  placeholder="Email Address"
                  @focus="newsletterSubscriptionHelpMessage = 'Required. We\'ll never share your email with anyone else.'"
                  @blur="newsletterSubscriptionHelpMessage = null">
              </div><!-- /.input-group -->
            </div><!-- /.form-group .col-md -->
          </div><!-- /.row -->
          <div class="form-group">
            <button type="button" class="btn btn-info">Subscribe!</button>
            <transition name="v-fade">
              <small
                v-if="newsletterSubscriptionHelpMessage"
                id="newsletter-subscription-help-message"
                class="form-text text-muted">
                {{ newsletterSubscriptionHelpMessage }}
              </small>
            </transition>
          </div><!-- /.form-group .text-left -->
        </form><!-- /form -->
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
.newsletter-subscription .container {
  max-width: 60rem;
}
</style>

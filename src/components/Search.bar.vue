<template>
  <main class="mt-5 pt-5">
    <div class="container">
      <section
        class="card wow fadeIn"
        style="background-image: url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg);"
      >
        <!-- Content -->
        <div class="card-body text-white text-center py-5 px-5 my-5">
          <h2 class="mb-4">
            <strong>Online bookstore specializing in technical books</strong>
          </h2>

          <h5 class="mb-4">
            <p>
              Get fast access to thousands of technology
              related books.
            </p>
          </h5>
          <div class="search-button active-pink-3 active-pink-4 mb-4">
            <input
              class="form-control"
              type="text"
              placeholder="Title Search"
              aria-label="Search"
              id="book-name"
              @keyup="updateQuery()"
            >
          </div>
        </div>
      </section>
      <hr class="my-5">
    </div>
  </main>
</template>

<script>
export default {
  props: ['query'],
  methods: {
    updateQuery() {
      this.query = document.getElementById("book-name").value.toLowerCase()
      this.$emit('queryChanged', this.query)
    }
  }
};
</script>


<style scoped>
.active-pink-4 input[type="text"]:focus:not([readonly]) {
  border: 1px solid #f48fb1;
  box-shadow: 0 0 0 1px #f48fb1;
}
</style>


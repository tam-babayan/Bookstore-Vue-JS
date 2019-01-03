<template>
  <div class="container">
    <div class="row mb-4" id="container">
      <div class="flip-card" v-bind:key="book" v-for="(book, index) in filteredBooks">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img width="350" height="450" :src="book.portada">
          </div>
          <div class="flip-card-back">
            <h3>{{book.titulo}}</h3>
            <p>{{book.descripcion}}</p>
            <button
              data-toggle="modal"
              :data-target="getModalId(index, true)"
              type="button"
              class="btn btn-outline-white waves-effect"
            >See More</button>
          </div>
        </div>
      </div>
      <div
        v-bind:key="book"
        v-for="(book, index) in filteredBooks"
        class="modal fade"
        :id="getModalId(index)"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <img :src="book.detalle">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['query'],
  data: function() {
    return {
      books: []
    };
  },
  created() {
    this.fetchData();
  },
  computed: {
    filteredBooks() {
      return this.books.filter(
        book =>
          this.query === null || book.titulo.includes(this.query) ||
          book.titulo.toLowerCase().includes(this.query)
      );
    }
  },
  methods: {
    fetchData() {
      fetch("https://api.myjson.com/bins/udbm5")
        .then(response => response.json())
        .then(data => {
          this.books = data.books;
          console.log(data);
        })
        .catch(error => console.error(error));
    },
    getModalId(index, isHash = false) {
      return (isHash ? "#" : "") + "exampleModalCenter" + index;
    }
  }
};
</script>

<style scoped>
.flip-card {
  background-color: transparent;
  width: 350px;
  height: 450px;
  margin-bottom: 20px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
  z-index: 2;
}

.flip-card-back {
  background-color: #41adf1;
  color: white;
  transform: rotateY(180deg);
  z-index: 1;
}

.flip-card-back h3 {
  font-weight: bold;
  padding-top: 50px;
  color: #ffe394;
}

.flip-card-back p {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
}

#container {
  display: flex;
  justify-content: space-around;
}

.name {
  font-weight: bold;
  font-size: 30px;
}
.text-on-button {
  color: #ffe394;
}
</style>



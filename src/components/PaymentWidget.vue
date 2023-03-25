<template>
  <div class="payment-widget">
    <h3>Оплата</h3>
    <form @submit.prevent="submitPayment">
      <!-- ...форма оплаты... -->
    </form>
  </div>
</template>

<script>
export default {
  props: {
    params: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      // ...данные компонента...
    };
  },
  methods: {
    submitPayment() {
      // ...метод отправки платежа...
    },
  },
  mounted() {
    console.log(this.params);
  },
};
</script>

<style scoped>
/* ...стили компонента... */
</style>

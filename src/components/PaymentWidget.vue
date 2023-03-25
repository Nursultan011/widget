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
  props: ["options"],
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
    console.log(props.options);
  },
};
</script>

<style scoped>
/* ...стили компонента... */
</style>

import Vue from 'vue';
import PaymentWidget from './components/PaymentWidget.vue';

function openPaymentWidget(widgetOptions) {
  const widgetContainer = document.createElement('div');
  document.body.appendChild(widgetContainer);

  new Vue({
    render: (h) => h(PaymentWidget, { props: { params: widgetOptions } }),
  }).$mount(widgetContainer);
}

if (!window.openPaymentWidget) {
  window.openPaymentWidget = openPaymentWidget;
}

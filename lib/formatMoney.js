export default function formatMoney(amount, currency = 'INR') {
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  });

  return formatter.format(amount / 100);
}

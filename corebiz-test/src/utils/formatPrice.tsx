export default function formatPrice(price: number) {
    return `R$ ${(price / 100).toFixed(2)}`.replace('.', ',')
}
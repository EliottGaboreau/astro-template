<script>
    import { getOrder } from "../../lib/order.svelte";

    let order = getOrder();

    order.fetchOrder();

    $inspect(order);
</script>

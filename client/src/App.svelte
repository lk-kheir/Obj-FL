<script>
    import {onMount} from "svelte";
    import axios from "axios";

    let objectsLost = [];

    onMount(async ()  => {
        const {data} = await axios.get('http://localhost:3000/api/objects/object-lost');
        console.log(data)
        objectsLost = data
    })

</script>

<main>
    {#each objectsLost as objLost}
        <p>{objLost.dateOfLost}</p>
        <p>
            Name: {objLost.loser.name}
            Level: <span>{objLost.loser.level}</span>
            Class: <span>{objLost.loser.class}</span>
        </p>

    {/each}
</main>

<style>
    main {
        display: flex;
        justify-content: space-between;
    }
</style>

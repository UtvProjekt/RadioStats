
<template> 
<div class="smallIcon" :class="classtype" v-for="messages in name" v-bind:key="messages" v-bind:style="{left: ((messages.longitude-11.691081)/0.548497)*multiplierx + '%', bottom: ((messages.latitude-57.560786)/0.296872)*multipliery + '%'}"> </div>
</template>


<script>

export default {
  name: "MapLocations",
    props: {
        name: Array,
        multiplierx: String,
        multipliery: String,
        classtype: String,
    },
};
</script>

<style>
    
</style>


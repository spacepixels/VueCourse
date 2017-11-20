<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
    </div>
</template>

<!-- Adding the key word scoped will tell Vuejs to put this style into a Sub-DOM and you can see this by inspecting the page (a uniqueId will be added to the div
    If you dont add the key word scoped then the style will be applied Globally within the Parent DOM
    Also Vuejs write the styles into the HTML header
-->

<style scoped>
    div {
        border: solid 1px red;
    }
</style>